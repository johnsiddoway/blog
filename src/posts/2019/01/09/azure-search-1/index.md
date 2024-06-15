---
title: 'Azure Search Part 1'
date: '2019-01-09'
description: 'Plugging Azure Search into Pirate Radio'
layout: post.html
tags: posts
---
### Overview
There are a few good "starter" guides for Azure Search, and I've linked to a few of them at the bottom. As I was writing up my experiences with following these guides, I noticed that my blog post was turning into a novella. So I have split it up into two portions: this post will cover the specifics of what I did, and the next post will be my rationale for choosing Azure, my opinions, and thoughts on the experience.

The short version:
1. Create an instance of the Search Service.
1. Create an Index and Index Model
1. Populate the Index with existing records
1. Integrate Search into your app
1. Push record updates up to the Index

A couple of gotchas:
* Index model's require a String primary key
* Azure throws an exception if your index batch size is over 5MB

For my examples, I am using C#. To access Azure classes, I installed the [Microsoft.Azure.Search](https://docs.microsoft.com/en-us/azure/search/search-howto-dotnet-sdk) nuget package. If you are using a different language, you can check out the [Search API Versions](https://docs.microsoft.com/en-us/azure/search/search-api-versions) for information on how to use your language of choice.

#### Create Search Service (and Index)
There are several ways to create the search service and index. I found that the Azure [Portal UI](https://azure.microsoft.com/en-us/features/azure-portal/) worked great for creating the search service instance and the index definition itself. Since I would expect indexes to be long-lived, I don't think it's the sort of thing I'd find myself putting in code for reusability. If that's not your preferred method, you can use the [Command Line](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest), and probably even using raw [HTTP requests](https://docs.microsoft.com/en-us/rest/api/azure/) through Postman or something similar.

#### Populate Index
Once you have the service and index defined, you can start shoving data into it. To start, you'll end up pushing all of your existing records into the index, but once the index is set up you'll just need to figure out a way to push updates to Azure. To seed my index, I needed to first define a class that matched the format of the index model, and then push data to Azure in this format.

> TrackDocument.cs
```csharp
public class TrackDocument {
    public string TrackKey { get; set; }
    public string TrackTitle { get; set; }
    public string ArtistName { get; set; }
    public string AlbumName { get; set; }
    public string GenreName { get; set; }
}
```

> Backfill.cs
```csharp
using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using PirateRadio.Search;
using PirateRadio.Data;
using System;
using System.Collections.Generic;
using System.Linq;

public class Backfill {
    public void Run() {
        PirateRadioContext context = new PirateRadioContext("connection string"); // this extends Entity Framework Context
        ISearchServiceClient serviceClient = new SearchServiceClient("searchServiceName", new SearchCredentials("apiKey"));
        ISearchIndexClient indexClient = serviceClient.Indexes.GetClient("indexName");
        int skip = 0;
        int take = 1000;

        IEnumerable<TrackDocument> batch = GetBatch(context, skip, take);
        while (batch.Any()) {
            Console.Write(".");
            indexClient.Documents.Index(IndexBatch.MergeOrUpload(batch));
            skip += take;
            batch = GetBatch(context, skip, take);
        }
    }

    private static void GetBatch(PirateRadioContext context, int skip, int take) {
        return context.Tracks.Skip(skip).Take(take).Select(t => {
            return new TrackDocument() {
                TrackKey = t.TrackKey.ToString(),
                TrackTitle = t.TrackTitle,
                ArtistName = t.Artist.ArtistName,
                AlbumName = t.AlbumName,
                GenreName = t.Genre.GenreName
            }
        });
    }
}
```

After running this script (or something like it), you should be able to see the index full of data. You can also use the Search Explorer to start messing around with querying your data. Here's a screenshot of me searching the index for 'exactly Yellow Submarine' with double quotes, and finding only 19 search results. These include 13 tracks from the [Yellow Submarine soundtrack](https://en.wikipedia.org/wiki/Yellow_Submarine_(album)), the original track from [Revolver](https://en.wikipedia.org/wiki/Revolver_(Beatles_album)), the re-release on the [1](https://en.wikipedia.org/wiki/1_(Beatles_album)) compilation album, and 4 covers.

<img src="azure-search-01.png" alt="Azure Search Explorer">

#### Integrating into our Code
Now that we've got data pushed into the index, we need to use it for real. To go from our little test code up above to code that looks a bit more like the real world, I had to make quite a bit of changes:
* Wrap the Azure Interfaces & classes in my own interfaces
* Store the `Service Name`, `API Key`, and `Index Name` in configuration files that are accessible in production
* Setup the Web App Dependency Injection
* Consume my new interface in my Controller

#### Refactored Code
To isolate the rest of my code from understanding what's powering search externally, I put the Azure clients behind an interface which I hoped would be generic enough that I could reuse it if I decided to test out the other Search As A Service offerings later. This also meant creating a small POCO in my namespace for the search results. Again, for my use case this didn't need to be a big complex entity. I just wanted to know the current set of search results, and the total number of possible results.

> SearchResult.cs
```csharp
using System.Collections.Generic;

public class SearchResult {
    public IEnumerable<TrackDocument> Items { get; set; }
    public long? TotalItems { get; set; }

    public SearchResult(IEnumerable<TrackDocument> items, long? totalItems)     {
        Items = items;
        TotalItems = totalItems;
    }
}
```

> ISearchService.cs
```csharp
using System.Collections.Generic;

public interface ISearchService {
    SearchResult Search(string searchText, int skip, int take);
    void DeleteBatch(IEnumerable<TrackDocument> batch);
    void UploadBatch(IEnumerable<TrackDocument> batch);
}
```

Now I just needed to implement the interface, using Azure as the backing search engine. This class also includes a constructor that can be used by .NET's build in [Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2) framework.

> AzureSearchService.cs
```csharp
using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

public class AzureSearchService : ISearchService
{
    private ISearchServiceClient serviceClient;
    private ISearchIndexClient indexClient;

    public AzureSearchService(IOptions<SearchOptions> options)
    {
        SearchCredentials credentials = new SearchCredentials(options.Value.ApiKey);
        serviceClient = new SearchServiceClient(options.Value.SearchServiceName, credentials);
        indexClient = serviceClient.Indexes.GetClient(options.Value.IndexName);
    }

    public SearchResult Search(string searchText, int skip, int take) {
        SearchParameters parameters = new SearchParameters() {
            IncludeTotalResultCount = true,
            Skip = skip,
            Top = take
        };

        DocumentSearchResult<TrackDocument> result = indexClient.Documents
            .Search<TrackDocument>(searchText, parameters);
        return new SearchResult(result.Results.Select(r => r.Document), result.Count);
    }

    public void DeleteBatch(IEnumerable<TrackDocument> batch) {
        if (batch.Any()) {
            indexClient.Documents.Index(IndexBatch.Delete(batch));
        }
    }

    public void UploadBatch(IEnumerable<TrackDocument> batch) {
        if (batch.Any()) {
            indexClient.Documents.Index(IndexBatch.MergeOrUpload(batch));
        }
    }
}
```

> SearchOptions.cs
```csharp
public class SearchOptions {
    public string SearchServiceName { get; set; }
    public string ApiKey { get; set; }
    public string IndexName { get; set; }
}
```

#### Integrating Into Web App
Now that I've got the code set up in an injectable manner, I need to update my website to use the enhanced functionality. The basic steps are:
1. Add a reference to the package
1. Update my Startup.cs to make sure I can inject my new dependency
1. Replace my old implementation of search with the new one.

<div class="alert alert-info" role="alert">
Configuration.GetSection() requires the Microsoft.Extensions.Options.ConfigurationExtensions package
</div>

> Startup.cs
```csharp
using PirateRadio.Search; // The namespace I put all of the code samples from above

public class Startup {
    public void ConfigureServices(IServiceCollection services) {
        // other code ommitted for brevity
        services.AddTransient<ISearchService, AzureSearchService>();
        services.Configure<SearchOptions>(Configuration.GetSection("PirateRadio.Search"));
    }
}
```

This Controller code isn't the cleanest because there's a bit of math and multiple object transformations going on directly in the Controller. In my actual code I would probably make a little helper class to encapsulate this bit of code to make it more re-usable. However, for this blog I moved all the code into the controller to make it easier to understand what changes I needed to make to swap out the old code and replace it with the new code.  I also rolled my own pagination implementation in the web app, but I'd recommend checking out [the X.PagedList Github project](https://github.com/dncuug/X.PagedList) if you want something pre-built.

> TrackController.cs
```csharp
using PirateRadio.Search;

public class SearchController : Controller {
    private ISearchService SearchService { get; set; }
    // private PirateRadioContext Context { get; set; }

    public SearchController(ISearchService search) {
        SearchService = search;
    }

    [HttpGet]
    public IActionResult Search([FromQuery]string search, int? page) {
        int pageSize = 10;
        int index = page ?? 1;
        int skip = (index - 1) * pageSize;
        // IQueryable<Track> tracks = Context.Tracks.Search(search, skip, pageSize);
        SearchResult results = SearchService.Search(search, skip, pageSize);
        if (results.TotalItems > 0) {
            int totalPages = Convert.ToInt32(Math.Ceiling((double)results.TotalItems / pageSize));
            // This view model is used for paginated result sets. It has fields for:
            // What are the items on this page? What page of results am I on?
            // How many total pages of results are there? What was the original search string?
            PaginatedList viewModel = new PaginatedList(results.Items, index, totalPages, search);
            return new ObjectResult(results);
        }
        // Otherwise, return 404
        return NotFound();
    }
}
```

I could keep going and write up all the code on the UI side as well, but I decided against it. The UI is just rendering the search results that come back from the service, regardless of the backing engine. In fact, since I had already built a primitive search function on my primary database, I had already built this UI. And because the returned view model didn't change at all, I was able to fire up my web server, and test out the search page. Just as expected, searching for `"Yellow Submarine"` returned exactly 19 results, while `Yellow Submarine` returned a lot more, including Coldplay's "Yellow" and Björk's "Submarine."

<img src="azure-search-02.png" alt="Azure Search Explorer">

#### Integrating Into Console App

The Website isn't the only place I needed to make changes. I have a console app that scans my music library on disk for changes, and updates my database. I need the Search Index to get the same set of updates as well.

<div class="alert alert-info" role="alert">
Console apps by default don't include the Microsoft.Extensions.DependencyInjection package
</div>

> Program.cs
```csharp
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PirateRadio.Search;

class Program {
    static void Main(string[] args) {
        IServiceCollection serviceCollection = new ServiceCollection();
        ConfigureServices(serviceCollection);
        ServiceProvider serviceProvider = serviceCollection.BuildServiceProvider();

        // my console apps actual code
        Processor processor = serviceProvider.GetService<Processor>();
        processor.ScanAndUpdate();
    }

    private static void ConfigureServices(IServiceCollection services) {
        // omitting other config for brevity
        services.AddOptions();
        services.AddSingleton<ISearchService, AzureSearchService>();
        services.Configure<SearchOptions>(configuration.GetSection("PirateRadio.Search"));
    }
}
```

> Processor.cs
```csharp
public class Processor {
    private PirateRadioContext Context { get; set; }
    private ISearchService SearchService { get; set; }

    public SearchProcessor(PirateRadioContext context, ISearchService search) {
        Context = context;
        SearchService = search;
    }

    public void Process() {
        // omitting other code for brevity
        // these two methods are just added onto the end of the internal methods
        // order of execution for these two methods does not matter
        UpsertChangedTracks();
        RemoveDeletedTracks();
    }

    private void UpsertChangedTracks() {
        IEnumerable<TrackDocument> batch = Database.FindUpdatedTracks().Select(this.ToDocument);
        SearchService.UploadBatch(batch);
    }

    private void RemoveDeletedTracks() {
        IEnumerable<TrackDocument> batch = Database.FindDeletedTracks().Select(this.ToDocument);
        SearchService.DeleteBatch(batch);
    }

    private TrackDocument ToDocument(ProcessedTrack track) {
        return new TrackDocument() {
            TrackKey = track.TrackKey.ToString(),
            TrackTitle = track.TrackTitle,
            AlbumName = track.AlbumName,
            ArtistName = track.ArtistName,
            GenreName = track.GenreName
        };
    }
}
```

### Resources
* [Clemens Siebler's Quick Start Tutorial](https://clemenssiebler.com/azure-search-quickstart-tutorial/)
  * Great graphics and up-to-date screenshots
  * Gives a good high-level description of the various features and when/why you'd want to use them
* [Carlos Mendible's Step By Step Guide](https://carlos.mendible.com/2017/08/09/step-by-step-net-core-and-azure-search/)
  * Great code samples for creating and searching in C#. You can copy-paste his code and it'll run
  * Doesn't really describe what he's doing or why
* [Irmak Tevfik's Tutorial](http://www.irmaktevfik.com/post/2016/08/23/azure-search-tutorial-with-a-sample-project)
  * A good mix between the previous two. Decent code documentation and explanations of what he's doing
  * Screenshots are outdated. The Free Tier used to be limited to 10,000 documents. It is now 50 MB of storage.
* [Microsoft Official Docs](https://docs.microsoft.com/en-us/azure/search/)
  * Of all of the ones I read through [this page](https://docs.microsoft.com/en-us/azure/search/search-howto-dotnet-sdk) was the most approachable