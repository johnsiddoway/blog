import{j as e,L as l,O as u,m as p,u as m,a as g,h as f,R as w,b as s,c as b,d as y,B as v}from"./vendor-5dd20a82.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();function I(){return e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx("nav",{children:e.jsxs("div",{className:"flex-with-gap",children:[e.jsx(l,{to:"/",className:"js-brand",children:"Maps and Gold"}),e.jsx(l,{to:"/archive",children:"Archive"}),e.jsx(l,{to:"/about",children:"About"})]})})}),e.jsx("main",{children:e.jsx(u,{})}),e.jsxs("footer",{children:["© ",new Date().getFullYear()," John Siddoway"]})]})}const k=`---\r
title:  'Hello World'\r
date:  '2018-12-24'\r
description: 'First post'\r
tags: miscellaneous\r
---\r
On October 8th 2018, [Google announced](https://www.blog.google/technology/safety-security/project-strobe/) that they would be sunsetting (turning off) Google+, effective August 31, 2019. While I wasn't an avid Google+ user, I *did* use it as an informal place to post links and articles I found useful. Then, on December 10th, [Google announced](https://www.blog.google/technology/safety-security/expediting-changes-google-plus/) that they were moving up their timetable to sunset Google+ to April 2019.\r
\r
So that left me with a handful of old links, a handful of new links, and nowhere to post them. I frequently find myself learning something new-to-me either at work or while working on personal projects, and I'd like to have a place to record them for posterity. \`"Come on, John. You solve problems all day at work. This sounds like a solvable problem. Do something about it,"\` I told myself. So here I am, doing something about it. I'm starting *yet another* blog.\r
\r
I don't have a goal of posting on any particularly regular schedule, although I would like to work through my backlog of Google+ content before diving into newer links and content. I also don't currently have any plans for publishing these posts anywhere but the original hosting site ([Github Pages](https://pages.github.com/)).`,S=`---\r
title: 'Star Rating'\r
date: '2018-12-29'\r
description: 'Creating a basic star rating using some custom CSS and Font Awesome 5'\r
tags: css font-awesome-5\r
customJavascript: '/js/star-rating.js'\r
customStylesheet: '/css/star-rating.css'\r
---\r
On Font Awesome's [4.7 Examples](https://fontawesome.com/v4.7.0/examples/) page, they included an example of how to implement a basic star rating using their \`star\` icon. They also linked out to [this great article](https://css-tricks.com/star-ratings/). When Font Awesome 5 came out, I noticed that their docs didn't include an Example page anymore, so I thought I'd recreate this simple feature.\r
\r
### Demo\r
\r
You can also see this on [CodePen](https://codepen.io/pezmotion/pen/RQERdm)\r
\r
<div class="rating d-inline-block" id="example-one">\r
    <input id="example-one-5" type="radio" name="example-one" value="5"/><label for="example-one-5"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-one-4" type="radio" name="example-one" value="4"/><label for="example-one-4"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-one-3" type="radio" name="example-one" value="3" checked /><label for="example-one-3"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-one-2" type="radio" name="example-one" value="2"/><label for="example-one-2"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-one-1" type="radio" name="example-one" value="1"/><label for="example-one-1"><i class="fas fa-2x fa-star"></i></label>\r
</div>\r
<div>\r
    Current Rating: <span id="example-one-value"></span>\r
</div>\r
\r
### Explanation\r
There are two basic CSS features being used here. We are listing out the inputs highest to lowest value, but then setting the directionality of the items so that they render lowest to highest. This lets us use a subsequent sibling selector to style the lower values the same as the currently-selected value.\r
\r
#### Directionality override\r
\`\`\`html\r
<div class="rating">\r
    <input id="rating-5" type="radio" name="rating" value="5"/>\r
    <input id="rating-4" type="radio" name="rating" value="4"/>\r
    <input id="rating-3" type="radio" name="rating" value="3" checked />\r
    <input id="rating-2" type="radio" name="rating" value="2"/>\r
    <input id="rating-1" type="radio" name="rating" value="1"/>\r
</div>\r
\`\`\`\r
\r
\`\`\`css\r
.rating {\r
    direction: rtl;\r
    unicode-bidi: bidi-override;\r
}\r
\`\`\`\r
\r
Star Ratings are typically viewed with the lowest score on the left, and the highest score on the right. In our case, 1 to 5. By setting this to "right to left" and then putting our elements highest-to-lowest when we define them, they are *rendered* left to right. By itself this isn't that useful. Here's what our Star Ratings would look like without it, though:\r
\r
<div class="rating-ltr d-inline-block" id="example-two">\r
    <input id="example-two-5" type="radio" name="example-two" value="5"/><label for="example-two-5"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-two-4" type="radio" name="example-two" value="4"/><label for="example-two-4"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-two-3" type="radio" name="example-two" value="3" checked /><label for="example-two-3"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-two-2" type="radio" name="example-two" value="2"/><label for="example-two-2"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-two-1" type="radio" name="example-two" value="1"/><label for="example-two-1"><i class="fas fa-2x fa-star"></i></label>\r
</div>\r
<div>\r
    Current Rating: <span id="example-two-value"></span>\r
    <span class="text-muted"><em>Note: this is still using the next feature. It's just had it's directonality left at the default (left-to-right)</em></span>\r
</div>\r
\r
#### Subsequent-sibling combinator\r
\`\`\`css\r
.rating label:hover,\r
.rating label:hover ~ label,\r
.rating input:checked + label,\r
.rating input:checked + label ~ label {\r
    color: #ffc107;\r
}\r
\`\`\`\r
\r
The \`.rating input:checked + label\` line uses the \`+\` selector to set **just** the label immediately after the checked radio button, which is the current value.\r
\r
The \`.rating input:checked + label ~ label\` line uses the \`~\` selector, which is the Subsequent-sibling selector. In general, this selects everything between the left operand and the right. In our specific use case, this selects all labels **after** the currently-selected label. This is used to style the values "lower than" the currently selected rating. Without this selector we would only highlight the current rating, which isn't what your users are going to expect.\r
\r
The \`.rating label:hover\` line and the \`.rating label:hover ~ label\` are used to apply the same style to "possible" star ratings. For the example below, I've removed these lines as well.\r
\r
<div class="rating-single d-inline-block" id="example-three">\r
    <input id="example-three-5" type="radio" name="example-three" value="5"/><label for="example-three-5"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-three-4" type="radio" name="example-three" value="4"/><label for="example-three-4"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-three-3" type="radio" name="example-three" value="3" checked /><label for="example-three-3"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-three-2" type="radio" name="example-three" value="2"/><label for="example-three-2"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-three-1" type="radio" name="example-three" value="1"/><label for="example-three-1"><i class="fas fa-2x fa-star"></i></label>\r
</div>\r
<div>\r
    Current Rating: <span id="example-three-value"></span>\r
    <span class="text-muted"><em>Note: this is still using the directionality feature. It's just had its selectors trimmed down to just the currently-selected rating value</em></span>\r
</div>\r
\r
#### All Together\r
\`\`\`html\r
<div class="rating">\r
    <input id="rating-5" type="radio" name="rating" value="5"/>\r
    <label for="rating-5"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="rating-4" type="radio" name="rating" value="4"/>\r
    <label for="rating-4"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="rating-3" type="radio" name="rating" value="3" checked />\r
    <label for="rating-3"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="rating-2" type="radio" name="rating" value="2"/>\r
    <label for="rating-2"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="rating-1" type="radio" name="rating" value="1"/>\r
    <label for="rating-1"><i class="fas fa-2x fa-star"></i></label>\r
</div>\r
\`\`\`\r
\r
\`\`\`css\r
 /* Color here is used for labels higher than your current value. */\r
 /* Color choice is up to you */\r
.rating {\r
    direction: rtl;\r
    unicode-bidi: bidi-override;\r
    color: #ddd;\r
}\r
\r
 /* Hides the standard radio inputs */\r
.rating input {\r
    display: none;\r
}\r
\r
 /* Sets the color of both current value and "potential" value via :hover */\r
 /* Again, color choice is up to you. I borrowed Bootstrap's "yellow"     */\r
.rating label:hover,\r
.rating label:hover ~ label,\r
.rating input:checked + label,\r
.rating input:checked + label ~ label {\r
    color: #ffc107;\r
}\r
\`\`\`\r
\r
<div class="rating d-inline-block" id="example-four">\r
    <input id="example-four-5" type="radio" name="example-four" value="5"/><label for="example-four-5"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-four-4" type="radio" name="example-four" value="4"/><label for="example-four-4"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-four-3" type="radio" name="example-four" value="3" checked /><label for="example-four-3"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-four-2" type="radio" name="example-four" value="2"/><label for="example-four-2"><i class="fas fa-2x fa-star"></i></label>\r
    <input id="example-four-1" type="radio" name="example-four" value="1"/><label for="example-four-1"><i class="fas fa-2x fa-star"></i></label>\r
</div>\r
<div>\r
    Current Rating: <span id="example-four-value"></span>\r
</div>\r
\r
#### Javascript\r
If you are including the star rating in a form with an explicit \`submit\` button, then the currently selected value will automatically get posted along with the rest of the form inputs.  But maybe you want to do some custom event handling, like handling the rating asynchronously without reloading the page. On this page, for example, I'm displaying the currently selected rating below the stars. The javascript for that is fairly straight-forward:\r
\r
\`\`\`javascript\r
$(document).ready(function() { // using jQuery is not required\r
    // on page load, display the default value\r
    var currentValue = $('input[name="rating"]:checked').val();\r
    $('#star-value').text(currentValue);\r
\r
    // add event listener \r
    $('input[name="rating"]').change(function(){\r
        $('#star-value').text(this.value);\r
    });\r
});\r
\`\`\`\r
\r
Or, for the [VanillaJS](http://vanilla-js.com/) crowd:\r
\`\`\`javascript\r
document.addEventListener("DOMContentLoaded", function() {\r
    // on page load, display the default value\r
    var currentValue = document.querySelector('input[name="rating"]:checked').value;\r
    document.getElementById('star-value').innerHTML = currentValue;\r
\r
    var ratings = document.getElementsByName("rating");\r
    for (var i = 0; i < ratings.length; i++) {\r
        ratings[i].onchange = function() {\r
            $('#star-value').text(this.value);\r
        };\r
    }\r
});\r
\`\`\`\r
\r
### Resources\r
* [CodePen Version](https://codepen.io/pezmotion/pen/RQERdm)\r
* [Font Awesome 4.7 Example](https://fontawesome.com/v4.7.0/examples/#custom)\r
* [CSS Tricks Article](https://css-tricks.com/star-ratings/)\r
* [Lea Verou's Blog Post](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/) (*Note: her example no longer works*)\r
* [Mozilla docs on Radio Inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)\r
`,x=`---\r
title:  'Pirate Radio'\r
date: '2019-01-08'\r
description: 'A brief history on a personal project'\r
tags: pirate-radio\r
---\r
\r
I don't think I can (or should) talk about what I do for work here. First of all, the majority of my learnings at work these days don't feel like they have general application. Second of all, and probably more importantly, I have no idea whether or not I'd be violating any NDAs. So instead, I'm going to focus on things I learn about in my (limited) free time. When I want to practice new concepts or try implementing a feature of some sort, I try to find a way to integrate it into a personal project.\r
\r
Many years ago, I created a personal website to stream my personal music library. I built it to practice working on full stack applications in C# (the language I was using at work at the time). I've used a couple different source control solutions over the years, so my commit history isn't very consistent. The earliest commit date I can find is in February 2014 from Visual Studio Online, and the solution is fully fleshed out. I think it's safe to say that I originally built it in 2012, probably with ongoing bugfixes and feature development going forward.\r
\r
In 2015, I switched companies, and pretty much everything in my work experience changed. I didn't need or have time to learn new things on my own time, I had plenty to learn about at work. Personal projects stopped for a time.\r
\r
Fast forward to September 2017. .NET Core 2.0 was released [in August](https://blogs.msdn.microsoft.com/dotnet/2017/08/14/announcing-net-core-2-0/). Font Awesome 5 Alpha was released [in June](https://www.kickstarter.com/projects/232193852/font-awesome-5/posts/1919869). Bootstrap 4 Beta was released [in August](https://blog.getbootstrap.com/2017/08/10/bootstrap-4-beta/). I decided that this was a good time to refresh my longest-running personal project. Instead of just cloning or branching my existing repo, I decided to start fresh in BitBucket. I am pretty sure there were two key reasons for this choice: free private repos, and Trello kanban board integration. As if this wasn't enough changes, I decided to play around with npm and Webpack for managing front-end packages. I had not used either before.\r
\r
And so, in September of 2017, I started building a .NET Core version of my personal music site, Pirate Radio. The website itself is pretty basic, but it does its basic job quite well. The two primary functions I want it to perform: allow myself or my wife play our home music library anywhere we have internet access, and don't let anyone else in. And it does those two jobs fairly well. Between Sept 2017 and March 2018, I rewrote / copied the important functionality, and haven't really had a chance to work on it since. There are a few updates I'd like to make, and the plan is to record my experiences making those updates as I make those changes.\r
\r
<img src="{{ '/assets/img/2019-01-08-pirate-radio-01.png' | relative_url }}" class="img-fluid" alt="Pirate Radio Screenshot">`,A=`---\r
title: 'Azure Search Part 1'\r
date: '2019-01-09'\r
description: 'Plugging Azure Search into Pirate Radio'\r
tags: azure\r
---\r
### Overview\r
There are a few good "starter" guides for Azure Search, and I've linked to a few of them at the bottom. As I was writing up my experiences with following these guides, I noticed that my blog post was turning into a novella. So I have split it up into two portions: this post will cover the specifics of what I did, and the next post will be my rationale for choosing Azure, my opinions, and thoughts on the experience.\r
\r
The short version:\r
1. Create an instance of the Search Service.\r
1. Create an Index and Index Model\r
1. Populate the Index with existing records\r
1. Integrate Search into your app\r
1. Push record updates up to the Index\r
\r
A couple of gotchas:\r
* Index model's require a String primary key\r
* Azure throws an exception if your index batch size is over 5MB\r
\r
For my examples, I am using C#. To access Azure classes, I installed the [Microsoft.Azure.Search](https://docs.microsoft.com/en-us/azure/search/search-howto-dotnet-sdk) nuget package. If you are using a different language, you can check out the [Search API Versions](https://docs.microsoft.com/en-us/azure/search/search-api-versions) for information on how to use your language of choice.\r
\r
#### Create Search Service (and Index)\r
There are several ways to create the search service and index. I found that the Azure [Portal UI](https://azure.microsoft.com/en-us/features/azure-portal/) worked great for creating the search service instance and the index definition itself. Since I would expect indexes to be long-lived, I don't think it's the sort of thing I'd find myself putting in code for reusability. If that's not your preferred method, you can use the [Command Line](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest), and probably even using raw [HTTP requests](https://docs.microsoft.com/en-us/rest/api/azure/) through Postman or something similar.\r
\r
#### Populate Index\r
Once you have the service and index defined, you can start shoving data into it. To start, you'll end up pushing all of your existing records into the index, but once the index is set up you'll just need to figure out a way to push updates to Azure. To seed my index, I needed to first define a class that matched the format of the index model, and then push data to Azure in this format.\r
\r
> TrackDocument.cs\r
{:.filename}\r
\`\`\`csharp\r
public class TrackDocument {\r
    public string TrackKey { get; set; }\r
    public string TrackTitle { get; set; }\r
    public string ArtistName { get; set; }\r
    public string AlbumName { get; set; }\r
    public string GenreName { get; set; }\r
}\r
\`\`\`\r
\r
> Backfill.cs\r
{:.filename}\r
\`\`\`csharp\r
using Microsoft.Azure.Search;\r
using Microsoft.Azure.Search.Models;\r
using PirateRadio.Search;\r
using PirateRadio.Data;\r
using System;\r
using System.Collections.Generic;\r
using System.Linq;\r
\r
public class Backfill {\r
    public void Run() {\r
        PirateRadioContext context = new PirateRadioContext("connection string"); // this extends Entity Framework Context\r
        ISearchServiceClient serviceClient = new SearchServiceClient("searchServiceName", new SearchCredentials("apiKey"));\r
        ISearchIndexClient indexClient = serviceClient.Indexes.GetClient("indexName");\r
        int skip = 0;\r
        int take = 1000;\r
\r
        IEnumerable<TrackDocument> batch = GetBatch(context, skip, take);\r
        while (batch.Any()) {\r
            Console.Write(".");\r
            indexClient.Documents.Index(IndexBatch.MergeOrUpload(batch));\r
            skip += take;\r
            batch = GetBatch(context, skip, take);\r
        }\r
    }\r
\r
    private static void GetBatch(PirateRadioContext context, int skip, int take) {\r
        return context.Tracks.Skip(skip).Take(take).Select(t => {\r
            return new TrackDocument() {\r
                TrackKey = t.TrackKey.ToString(),\r
                TrackTitle = t.TrackTitle,\r
                ArtistName = t.Artist.ArtistName,\r
                AlbumName = t.AlbumName,\r
                GenreName = t.Genre.GenreName\r
            }\r
        });\r
    }\r
}\r
\`\`\`\r
\r
After running this script (or something like it), you should be able to see the index full of data. You can also use the Search Explorer to start messing around with querying your data. Here's a screenshot of me searching the index for 'exactly Yellow Submarine' with double quotes, and finding only 19 search results. These include 13 tracks from the [Yellow Submarine soundtrack](https://en.wikipedia.org/wiki/Yellow_Submarine_(album)), the original track from [Revolver](https://en.wikipedia.org/wiki/Revolver_(Beatles_album)), the re-release on the [1](https://en.wikipedia.org/wiki/1_(Beatles_album)) compilation album, and 4 covers.\r
\r
<img src="{{ '/assets/img/2019-01-09-azure-search-01.png' | relative_url }}" class="img-fluid" alt="Azure Search Explorer">\r
\r
#### Integrating into our Code\r
Now that we've got data pushed into the index, we need to use it for real. To go from our little test code up above to code that looks a bit more like the real world, I had to make quite a bit of changes:\r
* Wrap the Azure Interfaces & classes in my own interfaces\r
* Store the \`Service Name\`, \`API Key\`, and \`Index Name\` in configuration files that are accessible in production\r
* Setup the Web App Dependency Injection\r
* Consume my new interface in my Controller\r
\r
#### Refactored Code\r
To isolate the rest of my code from understanding what's powering search externally, I put the Azure clients behind an interface which I hoped would be generic enough that I could reuse it if I decided to test out the other Search As A Service offerings later. This also meant creating a small POCO in my namespace for the search results. Again, for my use case this didn't need to be a big complex entity. I just wanted to know the current set of search results, and the total number of possible results.\r
\r
> SearchResult.cs\r
{:.filename}\r
\`\`\`csharp\r
using System.Collections.Generic;\r
\r
public class SearchResult {\r
    public IEnumerable<TrackDocument> Items { get; set; }\r
    public long? TotalItems { get; set; }\r
\r
    public SearchResult(IEnumerable<TrackDocument> items, long? totalItems)     {\r
        Items = items;\r
        TotalItems = totalItems;\r
    }\r
}\r
\`\`\`\r
\r
> ISearchService.cs\r
{:.filename}\r
\`\`\`csharp\r
using System.Collections.Generic;\r
\r
public interface ISearchService {\r
    SearchResult Search(string searchText, int skip, int take);\r
    void DeleteBatch(IEnumerable<TrackDocument> batch);\r
    void UploadBatch(IEnumerable<TrackDocument> batch);\r
}\r
\`\`\`\r
\r
Now I just needed to implement the interface, using Azure as the backing search engine. This class also includes a constructor that can be used by .NET's build in [Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2) framework.\r
\r
> AzureSearchService.cs\r
{:.filename}\r
\`\`\`csharp\r
using Microsoft.Azure.Search;\r
using Microsoft.Azure.Search.Models;\r
using Microsoft.Extensions.Options;\r
using System.Collections.Generic;\r
using System.Linq;\r
\r
public class AzureSearchService : ISearchService\r
{\r
    private ISearchServiceClient serviceClient;\r
    private ISearchIndexClient indexClient;\r
\r
    public AzureSearchService(IOptions<SearchOptions> options)\r
    {\r
        SearchCredentials credentials = new SearchCredentials(options.Value.ApiKey);\r
        serviceClient = new SearchServiceClient(options.Value.SearchServiceName, credentials);\r
        indexClient = serviceClient.Indexes.GetClient(options.Value.IndexName);\r
    }\r
\r
    public SearchResult Search(string searchText, int skip, int take) {\r
        SearchParameters parameters = new SearchParameters() {\r
            IncludeTotalResultCount = true,\r
            Skip = skip,\r
            Top = take\r
        };\r
\r
        DocumentSearchResult<TrackDocument> result = indexClient.Documents\r
            .Search<TrackDocument>(searchText, parameters);\r
        return new SearchResult(result.Results.Select(r => r.Document), result.Count);\r
    }\r
\r
    public void DeleteBatch(IEnumerable<TrackDocument> batch) {\r
        if (batch.Any()) {\r
            indexClient.Documents.Index(IndexBatch.Delete(batch));\r
        }\r
    }\r
\r
    public void UploadBatch(IEnumerable<TrackDocument> batch) {\r
        if (batch.Any()) {\r
            indexClient.Documents.Index(IndexBatch.MergeOrUpload(batch));\r
        }\r
    }\r
}\r
\`\`\`\r
\r
> SearchOptions.cs\r
{:.filename}\r
\`\`\`csharp\r
public class SearchOptions {\r
    public string SearchServiceName { get; set; }\r
    public string ApiKey { get; set; }\r
    public string IndexName { get; set; }\r
}\r
\`\`\`\r
\r
#### Integrating Into Web App\r
Now that I've got the code set up in an injectable manner, I need to update my website to use the enhanced functionality. The basic steps are:\r
1. Add a reference to the package\r
1. Update my Startup.cs to make sure I can inject my new dependency\r
1. Replace my old implementation of search with the new one.\r
\r
<div class="alert alert-info" role="alert">\r
Configuration.GetSection() requires the Microsoft.Extensions.Options.ConfigurationExtensions package\r
</div>\r
\r
> Startup.cs\r
{:.filename}\r
\`\`\`csharp\r
using PirateRadio.Search; // The namespace I put all of the code samples from above\r
\r
public class Startup {\r
    public void ConfigureServices(IServiceCollection services) {\r
        // other code ommitted for brevity\r
        services.AddTransient<ISearchService, AzureSearchService>();\r
        services.Configure<SearchOptions>(Configuration.GetSection("PirateRadio.Search"));\r
    }\r
}\r
\`\`\`\r
\r
This Controller code isn't the cleanest because there's a bit of math and multiple object transformations going on directly in the Controller. In my actual code I would probably make a little helper class to encapsulate this bit of code to make it more re-usable. However, for this blog I moved all the code into the controller to make it easier to understand what changes I needed to make to swap out the old code and replace it with the new code.  I also rolled my own pagination implementation in the web app, but I'd recommend checking out [the X.PagedList Github project](https://github.com/dncuug/X.PagedList) if you want something pre-built.\r
\r
> TrackController.cs\r
{:.filename}\r
\`\`\`csharp\r
using PirateRadio.Search;\r
\r
public class SearchController : Controller {\r
    private ISearchService SearchService { get; set; }\r
    // private PirateRadioContext Context { get; set; }\r
\r
    public SearchController(ISearchService search) {\r
        SearchService = search;\r
    }\r
\r
    [HttpGet]\r
    public IActionResult Search([FromQuery]string search, int? page) {\r
        int pageSize = 10;\r
        int index = page ?? 1;\r
        int skip = (index - 1) * pageSize;\r
        // IQueryable<Track> tracks = Context.Tracks.Search(search, skip, pageSize);\r
        SearchResult results = SearchService.Search(search, skip, pageSize);\r
        if (results.TotalItems > 0) {\r
            int totalPages = Convert.ToInt32(Math.Ceiling((double)results.TotalItems / pageSize));\r
            // This view model is used for paginated result sets. It has fields for:\r
            // What are the items on this page? What page of results am I on?\r
            // How many total pages of results are there? What was the original search string?\r
            PaginatedList viewModel = new PaginatedList(results.Items, index, totalPages, search);\r
            return new ObjectResult(results);\r
        }\r
        // Otherwise, return 404\r
        return NotFound();\r
    }\r
}\r
\`\`\`\r
\r
I could keep going and write up all the code on the UI side as well, but I decided against it. The UI is just rendering the search results that come back from the service, regardless of the backing engine. In fact, since I had already built a primitive search function on my primary database, I had already built this UI. And because the returned view model didn't change at all, I was able to fire up my web server, and test out the search page. Just as expected, searching for \`"Yellow Submarine"\` returned exactly 19 results, while \`Yellow Submarine\` returned a lot more, including Coldplay's "Yellow" and Björk's "Submarine."\r
\r
<img src="{{ '/assets/img/2019-01-09-azure-search-02.png' | relative_url }}" class="img-fluid" alt="Azure Search Explorer">\r
\r
#### Integrating Into Console App\r
\r
The Website isn't the only place I needed to make changes. I have a console app that scans my music library on disk for changes, and updates my database. I need the Search Index to get the same set of updates as well.\r
\r
<div class="alert alert-info" role="alert">\r
Console apps by default don't include the Microsoft.Extensions.DependencyInjection package\r
</div>\r
\r
> Program.cs\r
{:.filename}\r
\`\`\`csharp\r
using Microsoft.Extensions.Configuration;\r
using Microsoft.Extensions.DependencyInjection;\r
using PirateRadio.Search;\r
\r
class Program {\r
    static void Main(string[] args) {\r
        IServiceCollection serviceCollection = new ServiceCollection();\r
        ConfigureServices(serviceCollection);\r
        ServiceProvider serviceProvider = serviceCollection.BuildServiceProvider();\r
\r
        // my console apps actual code\r
        Processor processor = serviceProvider.GetService<Processor>();\r
        processor.ScanAndUpdate();\r
    }\r
\r
    private static void ConfigureServices(IServiceCollection services) {\r
        // omitting other config for brevity\r
        services.AddOptions();\r
        services.AddSingleton<ISearchService, AzureSearchService>();\r
        services.Configure<SearchOptions>(configuration.GetSection("PirateRadio.Search"));\r
    }\r
}\r
\`\`\`\r
\r
> Processor.cs\r
{:.filename}\r
\`\`\`csharp\r
public class Processor {\r
    private PirateRadioContext Context { get; set; }\r
    private ISearchService SearchService { get; set; }\r
\r
    public SearchProcessor(PirateRadioContext context, ISearchService search) {\r
        Context = context;\r
        SearchService = search;\r
    }\r
\r
    public void Process() {\r
        // omitting other code for brevity\r
        // these two methods are just added onto the end of the internal methods\r
        // order of execution for these two methods does not matter\r
        UpsertChangedTracks();\r
        RemoveDeletedTracks();\r
    }\r
\r
    private void UpsertChangedTracks() {\r
        IEnumerable<TrackDocument> batch = Database.FindUpdatedTracks().Select(this.ToDocument);\r
        SearchService.UploadBatch(batch);\r
    }\r
\r
    private void RemoveDeletedTracks() {\r
        IEnumerable<TrackDocument> batch = Database.FindDeletedTracks().Select(this.ToDocument);\r
        SearchService.DeleteBatch(batch);\r
    }\r
\r
    private TrackDocument ToDocument(ProcessedTrack track) {\r
        return new TrackDocument() {\r
            TrackKey = track.TrackKey.ToString(),\r
            TrackTitle = track.TrackTitle,\r
            AlbumName = track.AlbumName,\r
            ArtistName = track.ArtistName,\r
            GenreName = track.GenreName\r
        };\r
    }\r
}\r
\`\`\`\r
\r
### Resources\r
* [Clemens Siebler's Quick Start Tutorial](https://clemenssiebler.com/azure-search-quickstart-tutorial/)\r
  * Great graphics and up-to-date screenshots\r
  * Gives a good high-level description of the various features and when/why you'd want to use them\r
* [Carlos Mendible's Step By Step Guide](https://carlos.mendible.com/2017/08/09/step-by-step-net-core-and-azure-search/)\r
  * Great code samples for creating and searching in C#. You can copy-paste his code and it'll run\r
  * Doesn't really describe what he's doing or why\r
* [Irmak Tevfik's Tutorial](http://www.irmaktevfik.com/post/2016/08/23/azure-search-tutorial-with-a-sample-project)\r
  * A good mix between the previous two. Decent code documentation and explanations of what he's doing\r
  * Screenshots are outdated. The Free Tier used to be limited to 10,000 documents. It is now 50 MB of storage.\r
* [Microsoft Official Docs](https://docs.microsoft.com/en-us/azure/search/)\r
  * Of all of the ones I read through [this page](https://docs.microsoft.com/en-us/azure/search/search-howto-dotnet-sdk) was the most approachable`,T=`---\r
title: 'Azure Search Part 2'\r
date: '2019-01-10'\r
description: 'Discussing my experience with Azure Search'\r
tags: azure\r
---\r
### Backstory\r
One of the features I considered "nice to have" in Pirate Radio was the ability to search for a specific song or songs.\r
\r
In Pirate Radio 1.0, I did this in a *very* complicated manner, building Linq Predicate Builders from [LINQKit](http://www.albahari.com/nutshell/linqkit.aspx). This worked, but if I remember correctly it was very slow. For 1.next (I don't know exactly when I changed this), I replaced the LINQ with a generic SQL query, and then generating \`WHERE\` clauses in code based on the split input search string. This means that if you input 'The Beatles Yellow Submarine' I will return anything that contains 'The' or 'Beatles' or 'Yellow' or 'Submarine'. Simpler code, ran faster, but not great search results. This is also sub-optimal architecture (which I will dive into later).\r
\r
For Pirate Radio v2.0, I knew I wanted something better, but I didn't want to spend a lot of time rolling my own solution. So for my first pass, I dropped the code generation and just returned results where the entire search string was in the Artist Name, Album Name, or Track Title fields. So searching for 'The Beatles Yellow Submarine' would return nothing, but 'Yellow Submarine' would return just tracks on the Yellow Submarine album or the Yellow Submarine song on other albums. Simple and workable, but not great. This was still sub-optimal architecture.\r
\r
For Pirate Radio v2.next, I decided to try out Azure Search to provide a more intuitive search experience. I found a few decent resources on how to set it up, which I will link at the bottom. I actually didn't like Microsoft's official docs, because there was so much content it was tough to figure out where to start. Instead of just re-writing these guides, I plan on expanding on them by showing a more "real world" example of how I'm using it.\r
\r
### Why Azure\r
There are a few options out there for hosted search engines. My top three options were Algolia, Amazon AWS CloudSearch, and Azure Search. According to the [AWS CloudSearch Pricing](https://aws.amazon.com/cloudsearch/pricing/) page, CloudSearch does not have an "always free" tier. Algolia has a [Free For Open Source](https://www.algolia.com/for-open-source) pricing tier, and Azure has an [Always-Free Tier](https://azure.microsoft.com/en-us/free/#always-free). I ended up going with Azure because Pirate Radio is actually a private repo, and I didn't want to bother with changing it or applying for free pricing when Azure already had what I needed for my simple testing:\r
* 3 Indexes\r
* 50 MB storage (across all 3 indexes)\r
* Standard Data Transfer Rates (5 GB/month is free, I think across all Azure services in your account)\r
\r
While not exactly drawbacks, there are a couple of items I'd like to call out with Azure Search:\r
* Index Keys must be strings\r
* Upload Batches must be under 5MB (or possibly 1,000 documents)\r
\r
### My Experience\r
The 50 MB free storage was plenty for my use case.  My simple Track model for the index averages 136 bytes. Even for my large library (more than 150k tracks), I'm using less than half of the available storage. That should be plenty of space to expand my model to include other fields (like a list of tags per track, and/or genre) while still remaining free.\r
\r
Out of the box, the functionality was exactly what I was looking for. I look forward to adding in Scoring Profiles to try and fine-tune the search results.\r
\r
### Improved Architecture\r
Building clean code and well-architected code is a constant effort. There are tons of posts just dedicated to the topic, and I will probably write my own post (or series of posts on it) myself in the future. For now, I'll just expand on why I think searching on your primary database is not good architecture.\r
\r
For Pirate Radio, the database stores normalized information about all of the music files I have in my digitized music library. 90% or more of the operations against that data is reads. And the rate of reads is exteremly low, probably averaging one read a minute. The most common read request is "I want to play Track X. What's the path to the file on the network for me to go read?" Real production databases will have much higher rates of access. I've worked with database dealing with hundreds of requests a second. Everyone wants those requests to come back as quickly as possible; users will notice if your UI takes longer than 3 seconds to load or respond.\r
\r
In Pirate Radio, running search queries on my primary database are not really impacting production work. But in larger systems, it definitely would. Additionally, dedicated search systems are specifically designed for running queries incredibly fast. They are the right tool for this job. If the Search system goes down, someone using your system might be working slower but they're probably not even going to file a ticket. If your primary database is getting overloaded by search requests and nothing else is getting through, your users are *definitely* going to notice. Two phrases come to mind: *"Don't pull all your eggs in one basket"* and *"When the only tool in your toolbelt is a hammer, every problem looks like a nail."* Learning to use S\r
\r
### Resources\r
* [Clemens Siebler's Quick Start Tutorial](https://clemenssiebler.com/azure-search-quickstart-tutorial/)\r
  * Great graphics and up-to-date screenshots\r
  * Gives a good high-level description of the various features and when/why you'd want to use them\r
* [Carlos Mendible's Step By Step Guide](https://carlos.mendible.com/2017/08/09/step-by-step-net-core-and-azure-search/)\r
  * Great code samples for creating and searching in C#. You can copy-paste his code and it'll run\r
  * Doesn't really describe what he's doing or why\r
* [Irmak Tevfik's Tutorial](http://www.irmaktevfik.com/post/2016/08/23/azure-search-tutorial-with-a-sample-project)\r
  * A good mix between the previous two. Decent code documentation and explanations of what he's doing\r
  * Screenshots are outdated. The Free Tier used to be limited to 10,000 documents. It is now 50 MB of storage.\r
* [Microsoft Official Docs](https://docs.microsoft.com/en-us/azure/search/)\r
  * Of all of the ones I read through [this page](https://docs.microsoft.com/en-us/azure/search/search-howto-dotnet-sdk) was the most approachable`,C=`---\r
title: 'Old Links'\r
date: '2019-02-13'\r
description: 'A collection of old links from my Google Plus Account'\r
tags: miscellaneous\r
---\r
\r
One of the primary reason I started this blog was because I wanted a place to preserve personal learnings, as well as links to blog posts or articles I found particularly useful.  I had been keeping these on Google Plus, but because Google Plus is getting shut down I decided to use this as an opportunity to mess around with Jekyll and Github Pages. This is an unorganized collection of links to some of those articles.\r
\r
The problem with keeping a collection of old links like this, without adding anything new, is that I can't guarantee that they'll stick around forever. Better would be to incorporate the relevant knowledge into a post of my own, which I plan on doing over time. Hopefully before the original articles aren't lost forever.\r
\r
[Optimization Guide for Windows 8 on SSDs](https://www.overclock.net/forum/20-hard-drives-storage/1240779-sean-s-windows-8-install-optimization-guide-ssds-hdds.html)\r
: Okay, this one is really old, dating back to 2012. I have no idea if it's still relevant for Windows 10 or newer hardware.\r
\r
[Password Reset with SimpleMembership](http://kevin-junghans.blogspot.com/2013/04/password-reset-with-simplemembership.html)\r
: I think all of this (or most of it) is baked into newer releases of ASP.NET MVC 5. I know that I had the ability to plug in a simple email service to a .NET Core 2.x app as part of the default scaffolding. Keeping it for posterity anyway.\r
\r
[Resolve 404 in IIS Express for PUT and DELETE Verbs](https://stevemichelotti.com/resolve-404-in-iis-express-for-put-and-delete-verbs/)\r
: This was written for IIS 7, and the current version is IIS 10. I don't remember having to modify the allowed verbs, but keeping this anyway in case I need it.\r
\r
[How to Enable Remote Connections in SQL Server 2008](https://blogs.msdn.microsoft.com/walzenbach/2010/04/14/how-to-enable-remote-connections-in-sql-server-2008/)\r
: The latest version of SQL Server is 2017, so these instruction are quite old. As far as I'm aware, they're just a relevant.\r
\r
[HTML5 Sortable](http://farhadi.ir/projects/html5sortable/)\r
: This doesn't have the same level of control that I wanted. I should follow up with my extended library in a dedicated post.\r
* Single line and multi-line drag-able items\r
* Fixed size 'containers' that prevent overflow past their container size\r
* Drag-able items that can move within their own container, but cannot move to a different container on the same page.\r
* CSS to help provide visual indicators for size of containers, size of items, and their "dragability" (anywhere, only here, and nowhere).\r
\r
[Using Areas in an ASP.NET MVC App](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/areas?view=aspnetcore-2.2)\r
: The original link ([here](https://docs.microsoft.com/en-us/previous-versions/aspnet/ee671793(v=vs.98))) I used was super old (MVC 3). The link above is for ASP.NET Core 2.2.\r
: Areas allow you to organize your code more fully, to allow multiple high level functional components to work independently. Each area has its own controllers, views, and models.\r
\r
[Another Old Article on ASP.NET Areas](https://www.codeguru.com/csharp/.net/net_asp/mvc/article.php/c20227/Using-Areas-in-ASPNET-MVC-Application.htm)\r
: The name says it all. This is from 2012. I read through it briefly and most of it still seemed relevant.\r
\r
[Successive Method Calls with Moq](https://haacked.com/archive/2010/11/24/moq-sequences-revisited.aspx/)\r
: The original link ([here](https://haacked.com/archive/2009/09/29/moq-sequences.aspx/)) was from 2009. Phil updated it in 2010.\r
\r
HTTP/2\r
: Per the GitHub landing page, "HTTP/2 is a replacement for how HTTP is expressed 'on the wire.'"\r
* [HTTP/2 on Github](https://http2.github.io/)\r
* [HTTP2 for front-end web developers](https://mattwilcox.net/web-development/http2-for-front-end-web-developers)\r
* [HTTP/2 on IIS](https://blogs.iis.net/davidso/http2)\r
\r
[VanillaJS](http://vanilla-js.com/)\r
: Vanilla JS. Need I say more?\r
\r
[Load Local JSON file through Javascript](https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript)\r
: I recently had a need to work with a big, complicated JSON object. Instead of working exclusively in an IDE, I found it quicker to develop on a static single-page application, using a local .json file with an example object. This article helped me load a local file as a json object to work with.\r
: Note: Google Chrome doesn't allow you to do this unless the file is running through a web server of some sort, even a basic Apache server is good enough.\r
\r
[Unit Testing Anti-Patterns](https://stackoverflow.com/questions/333682/unit-testing-anti-patterns-catalogue)\r
: James Carr used to have a blog post on the topic, but [the link](http://blog.james-carr.org/2006/11/03/tdd-anti-patterns/) doesn't work anymore.\r
\r
Using npm and Webpack in ASP.NET Core\r
: I am using Webpack in a couple of projects, but I still don't think I understand it well enough to consider myself anything but a novice. I've used several articles to get me started.\r
* [ASP.NET Core 2.0 and the End of Bower](https://wildermuth.com/2017/11/19/ASP-NET-Core-2-0-and-the-End-of-Bower)\r
* [Setting up ASP.NET Core in Visual Studio 2017 with npm, webpack, and TypeScript: Part II](http://leruplund.dk/2017/04/15/setting-up-asp-net-core-in-visual-studio-2017-with-npm-webpack-and-typescript-part-ii/)\r
* [Building the minimal ASP.NET Core MVC app with NPM and webpack – the 2.0 edition](https://blogs.taiga.nl/martijn/2017/11/24/building-and-asp-net-core-mvc-app-with-npm-and-webpack-asp-net-core-2-0-edition/)\r
\r
[DOMException: The play() request was interrupted](https://developers.google.com/web/updates/2017/06/play-request-was-interrupted)\r
: This is an occasional exception I've gotten when streaming music from home to work.`,j=`---\r
title: 'Old Javascript and CSS Snippets'\r
date: '2019-02-14'\r
description: 'A collection of old code snippets from my Google Plus Account'\r
tags: javascript css miscellaneous\r
---\r
\r
### Short Stuff\r
* [CSS Tricks: Scaling SVG](https://css-tricks.com/scale-svg/)\r
\r
### FontAwesome and Tablesorter\r
This is custom CSS for [jquery.tablesorter.js](http://tablesorter.com/docs/) using [Font Awesome](http://fontawesome.io) icons instead of tablesorters default CSS. All it does is append up or down carets depending on the sorting. Very very lightweight CSS for a lightweight JQuery plugin. Stolen from [this Stack Overflow question](http://stackoverflow.com/questions/14736496/use-font-awesome-icons-in-css).\r
\r
\`\`\`css\r
table.tablesorter thead tr .headerSortUp:after {\r
position: relative;\r
right: -5px;\r
font-family: FontAwesome;\r
content: "\\f0d7";\r
}\r
table.tablesorter thead tr .headerSortDown:after {\r
position: relative;\r
right: -5px;\r
font-family: FontAwesome;\r
content: "\\f0d8";\r
}\r
\`\`\`\r
\r
### Silhouettes and Backgrounds\r
I couldn't think of a better title for this, but it's something I've seen a few places. Wasteland 2's original landing page was the first example I used. I had to go hit up the [Wayback Machine](https://archive.org/web/) to get a good snapshot of it. The header is a solid black .png with "Wasteland 2" cut out. This lets the background image to 'bleed through'. Same thing with the Battletech site; the silhouettes of the 'Mechs are layered over the other images, which are in turn layered over each other.\r
\r
<img src="{{ '/assets/img/2019-02-14-wasteland-2.png' | relative_url }}" class="img-fluid" alt="Wasteland 2 Screenshot">\r
\r
<img src="{{ '/assets/img/2019-02-14-battletech.png' | relative_url }}" class="img-fluid" alt="Battletech Screenshot">\r
\r
\`\`\`css\r
table.logo { width: 100%; }\r
table.logo { margin-bottom: 1em; } <!-- Optional -->\r
table.logo td { background-color: #000; }\r
table.logo th { width: 506px; } <!-- Any good looking px, em, or % -->\r
\`\`\`\r
\r
\`\`\`html\r
<table class="logo">\r
    <tbody>\r
        <tr>\r
            <td></td>\r
            <th><img alt="Logo" class="img-responsive" src="assets/img/logo.png" /></th>\r
            <td></td>\r
        </tr>\r
    </tbody>\r
</table>\r
\`\`\`\r
\r
### Image Zoom Magnifying Glass\r
[Updated Article]({% post_url 2019-02-15-magnify %})\r
\r
[Original Article](http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3)\r
\r
I made a small jQuery plugin out of the image magnification tool above. You just have to initialize it on the img elements to zoom on hover, with CSS class(es) that define how you want the magnifier to look. Note to self: I should post this as its own article at some point too.\r
\r
Note: I assume that the original image source is the original, full-size image, and the original img element is scaled down via CSS. I didn't want to bother with a "full size" and a "thumbnail" image if I know I'm going to use the "full size" version eventually.\r
\r
\`\`\`css\r
.magnify-lens {\r
    position: absolute;\r
    display: none;\r
    z-index: 10;\r
    height: 150px;\r
    width: 150px;\r
    border-radius: 40%;\r
    box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.85),\r
                0 0 7px 7px rgba(0, 0, 0, 0.25),\r
          inset 0 0 40px 2px rgba(0, 0, 0, 0.25);\r
}\r
\`\`\`\r
\r
\`\`\`html\r
<img src="..."/>\r
\`\`\`\r
\r
\`\`\`javascript\r
$(document).ready(function() {\r
  $('img').magnify({magnifiedClass:'magnify-lens'})\r
});\r
\`\`\``,D=`---\r
title: 'Knockout Links'\r
date: '2019-02-13'\r
description: 'A collection of old links from my Google Plus Account'\r
tags: knockout\r
---\r
\r
[Knockout](https://knockoutjs.com/index.html) is a fairly lightweight javascript library to bind your models data to the DOM in a way that automatically refreshes. The documentation is pretty good, but there were things I had to google to improve.\r
* [Official Dropdown Docs](https://knockoutjs.com/documentation/options-binding.html)\r
* [Official Collections Tutorial](http://learn.knockoutjs.com/#/?tutorial=collections)\r
* [Cascading Dropdowns](https://www.dotnetexpertguide.com/2012/06/cascading-dropdown-knockoutjs-aspnet.html)\r
* [Binding Dynamic Data to Dropdowns](https://thewayofcode.wordpress.com/tag/knockout-databinding-dropdownlist/)\r
* [Binding Initial Value of a Dropdown](https://stackoverflow.com/questions/6648991/binding-initial-default-value-of-dropdown-select-list)\r
* [Find Object by Id in Array](https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects)\r
* [Bootstrap + Knockout Button Toggles](https://blog.ewal.net/bootstrap-knockout-toggle-button-bindings/)\r
* [Utility Functions in Knockout](http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html)\r
* [Top 10 Mistakes That KnockoutJS Developers Make](http://dasaradhreddy.blogspot.com/2016/06/the-top-10-mistakes-that-knockoutjs.html)\r
* [10 Things To Know About KnockoutJS on Day One](http://www.knockmeout.net/2011/06/10-things-to-know-about-knockoutjs-on.html)\r
* [Communication Between Multiple View Models](http://www.wrapcode.com/communication-between-multiple-view-models-in-knockoutjs-mvvm-the-right-approach/)`,z=`---\r
title: 'Magnify.js'\r
date: '2019-02-15'\r
description: 'A small jQuery plugin for magnifying images'\r
tags: javascript jquery\r
customJavascript: '/js/magnify.js'\r
customStylesheet: '/css/magnify.css'\r
---\r
\r
### Overview\r
\r
I touched on it briefly in a previous post. I no longer remember *why* I started looking into this, but eventually I found [this article](http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3) with a pretty good example showing how to create a 'magnifying lens' effect on images. I didn't like a couple of things about the original, so I rewrote it as a jQuery plugin.\r
\r
### Working Example\r
\r
<img class="img-fluid magnify-this" src="https://images.unsplash.com/photo-1648138754688-377bbdf661d9" width="1296" height="864" alt="Photo by Dave Herring on Unsplash">\r
\r
Photo by [Dave Herring](https://unsplash.com/@daveherring) on [Unsplash](https://unsplash.com/)\r
\r
### How It Works\r
\r
#### Short Version\r
\r
1. Use the original image (**target**) as the background in another DOM element (**lens**)\r
1. Attach a mouse event listener to the target:\r
  * Pop up the lens, positioned near the mouse\r
  * Do some basic math to calculate the relative position of the mouse over the target\r
  * Do more math to move the lens background around\r
1. Attach another event listener to close the lens once the mouse leaves the target\r
\r
#### Long Version\r
\r
**Step 1: Use the original image as the background in another DOM element (the lens)**\r
\r
If you open the image ([this link opens a new tab](https://images.unsplash.com/photo-1648138754688-377bbdf661d9)), you'll see that the image is **quite** a bit larger than the shrunk-down version above. The shrinking is done by Bootstrap's \`\`\`img-fluid\`\`\` class: \`\`\`{ max-width: 100%; height: auto; }\`\`\`. But if you remove this class, or at least the \`\`\`max-width\`\`\` setting, you can see that the full size image is already loaded by the browser.\r
\r
All we need to do now is re-use the same image in another DOM element, but this time as the background-image. I am using the background image because you can easily move background images around (discussed later).\r
\r
\`\`\`javascript\r
// 'this' refers to the original image\r
var lens = document.createElement('div');\r
lens.className = settings.magnifiedClass;\r
lens.style.backgroundImage = "url('" + this.src + "')";\r
\`\`\`\r
\r
This is only half of it though. Turns out, we need to inject this element somewhere on the page. I decided to do this in two steps: create a parent div wrapping the original image, and then inject the lens into that same wrapper. I did it after the original image, but order doesn't matter.\r
\r
>before\r
{:.filename}\r
\`\`\`html\r
<img class="img-fluid" src="...">\r
\`\`\`\r
\r
>after\r
{:.filename}\r
\`\`\`html\r
<div>\r
    <img class="img-fluid" src="...">\r
    <div style="background-image: url('...')"></div>\r
</div>\r
\`\`\`\r
\r
**Step 2: Attach a Mouse Event Listener to the Original Image**\r
\r
At this point, we have a full-size copy of the same image on the page, albeit hidden from view at the moment. We want to pop up a tiny window of that full-size image that shows the same section of the full-size as the shrunken image that's under our mouse pointer. To do that, we need 3 pieces of information, for both the X coordinate and the Y coordinate:\r
1. The size of the smaller image (target)\r
2. The size of the full size image (lens)\r
3. Where on the smaller image our mouse currently is\r
\r
Once we have these three pieces of information, we can calculate the value of the fourth piece of information, the X,Y coordinate we are solving for.\r
\r
>1\r
{:.filename}\r
\`\`\`\r
MOUSE POSITION          DESIRED VALUE\r
-------------------  =  -------------------\r
SHRUNKEN IMAGE SIZE     ORIGINAL IMAGE SIZE\r
\`\`\`\r
\r
>2\r
{:.filename}\r
\`\`\`\r
MOUSE * ORIGINAL IMAGE SIZE     DESIRED VALUE * ORIGINAL IMAGE SIZE\r
---------------------------  =  -----------------------------------\r
SHRUNKEN IMAGE SIZE             ORIGINAL IMAGE SIZE\r
\`\`\`\r
\r
>3\r
{:.filename}\r
\`\`\`\r
(MOUSE * ORIGINAL IMAGE SIZE / SHRUNKEN IMAGE SIZE) = DESIRED VALUE\r
\`\`\`\r
\r
This isn't exactly the final answer either. If we stopped here, you'd notice two problems: 1) the position of the mouse is in the upper-left corner of the lens, not in the center; 2) as you move the mouse around the image the image moves *opposite* of our mouse.  The second problem is easier to solve than the other: multiply our value by -1. The first problem requires us to pull in another value, the rendered size of the lens. Once we have this, we can adjust the lens positioning by 50% of this value.\r
\r
>4\r
{:.filename}\r
\`\`\`\r
(MOUSE * ORIGINAL IMAGE / SHRUNKEN IMAGE - (LENS SIZE / 2)) * -1 = DESIRED VALUE\r
\`\`\``,P=`---\r
title: 'React and Monsters and AWS Oh My'\r
date: '2021-02-21'\r
description: Learning React through a small D&D app\r
tags: react aws dnd\r
---\r
\r
### Overview\r
\r
It's been a while since I've posted anything, but I finally have something worth blogging about. But first, some backstory. 2020 was a pretty rough year for most people, and my family was no exception. I switched to working from home full time, and all social gatherings were either moved online or just cancelled altogether. This included my monthly tabletop gaming group, which was cancelled indefinitely. Sometime during the summer my wife proposed that we try playing D&D together, just the two of us. And so I started DM'ing for her. While learning to DM, I realized a couple of things:\r
1. I like using physical content (dice, paper record sheets, etc).\r
2. Flipping back and forth through the Monster Manual or Monster stats of an Adventure book wasn't fast or easy. I needed to get three or four monster stats together on a single sheet of paper for easier play.\r
\r
Separately, at work we were dealing with a different problem. My team maintained several internal websites, written in a variety of different languages. The oldest was nearly ten years old, and was still limping along using JQuery 1.X, another was using Angular, and a third was using Elm. My team knew this was a problem, and agreed it was finally time to standardize our frontend frameworks. We took a survey, and the winner by a landslide was React. I didn't personally know it, but a lot of the newer engineers on the team had used it at school or at previous jobs and liked it. So, it was time for me to learn React.\r
\r
So, I built a simple site using React that let me print off any number of D&D Monster Stats. [Link to the repository](https://github.com/johnsiddoway/dnd-cards). I have not yet started hosting the site, but once I do I'll probably edit this post to include a link to the live version as well.\r
\r
### Part One: What I Wanted\r
\r
I just wanted a simple site that I could select one or multiple D&D monsters and print them out. There's a set of cards [for sale on Amazon.com](https://smile.amazon.com/dp/B07KJFS9VM) that is probably what most people use in this situation. This particular set is a little limited in the list of monsters that it supports, but it probably works for the vast majority of D&D games happening in a typical setting.\r
\r
There's also [this Reddit post](https://www.reddit.com/r/DMAcademy/comments/8i5ngw/monster_stats_cards/) that lists several alternatives. Most of these alternatives are limited to just monsters from the 5e SRD (System Reference Document), which is a specific list of monsters that Wizards of the Coast allows people to republish. If you want to publish something that isn't in the 5e SRD, you need official approval from WotC.\r
\r
* [This set on Drivethru RPG for $5.00 or PWYW](https://www.drivethrurpg.com/product/205572)\r
* [monstercards.ca](http://monstercards.ca/)\r
* [hardcodex.ru/monsters](http://hardcodex.ru/monsters/)\r
* [A free set on DeviantArt](https://www.deviantart.com/almega-3/gallery/58595208/dnd-5e-monster-cards)\r
* [Form-fillable PDFs](https://www.thearcanelibrary.com/collections/all/products/fillable-monster-cards)\r
\r
While almost any of these options would probably work, I decided to re-invent the wheel. This is mostly for my personal curiosity and use, but I still thought it would be worthwhile to blog about.\r
\r
### Part Two: Proof of Concept\r
\r
As my first pass, I built a single page application using a javascript framework I know quite well: [Knockout.js](https://knockoutjs.com/). I stored data in two different text files: one with monsters from the 5e SRD, and one with monsters that were not. This let me feel more confident about pushing the proof of concept out to Github [here](https://github.com/johnsiddoway/dnd-cards/tree/93a50c16f11092bcc791188b2674817691fbd042), since there was nothing in it from D&D that wasn't in the 5e SRD, and therefore it should be safe to have in a public repository.\r
\r
This worked pretty well. There was a search box that let me click on the name of the monster I wanted to print, and I had come up with three different layouts for monsters with different amounts of stat information (some monsters really do take up nearly a full sheet of paper). It would dynamically stretch content out to fit onto new sheets of paper, and also shrink back down to a smaller number of pages if you removed items from the list of selected monsters.\r
\r
### Part Three: Porting to React\r
\r
Before using React here, my only exposure to it was doing [the offical Tic-Tac-Toe tutorial](https://reactjs.org/tutorial/tutorial.html). I'm pretty sure I coded that up over one weekend, and then started rewriting my D&D Cards up the next weekend. It turned out to not be that bad, mostly moving code [in this commit](https://github.com/johnsiddoway/dnd-cards/commit/5b946c9d886017e252502380e326a29a97b9d622) from \`index.html\` (the layout, knockout bindings, and css tags) and \`app.js\` (the event-driven behavior) into \`src/App.js\`, which holds both the layout and behavior for React components in one file.\r
\r
I didn't split the components into separate files, which I think is recommended for larger and more "real" applications. This is a proof of concept, but I don't think the React side of the code is going to grow a lot from what it is today. Components are intended to be reusable pieces that can be plugged into your UI in different places or different ways, but my UI isn't going to change much in the future. I should probably review my code with my coworkers, and maybe find a React SME (Subject Matter Expert) to figure out if there are other ways my code doesn't match React standards / guidelines.\r
\r
### Part Four: Where Does AWS Come In?\r
\r
I mostly used Azure for my personal development up until now, but AWS DynamoDB has a very compelling free tier. I also figure that, since this site is basically just me messing around, I might as well try something a little different. My plan for a longer-term implementation involves storing the stat blocks in Dynamo, and allowing authorized users to add & edit entries. Once I get that set up, I will probably make another post detailing some of my experiences.`,R=`---\r
title: 'AWS CLI Cheat Sheet'\r
date: '2021-02-22'\r
description: 'Notes regarding the AWS CLI'\r
tags: aws\r
---\r
\r
While I usually use Microsoft Azure cloud services for personal development, I figured that it doesn't hurt to branch out and try multiple providers. Especially because they seem to have great complimentary free tiers. [Amazon AWS](https://aws.amazon.com/) also provides a [Command Line Interface](https://aws.amazon.com/cli/) to do quite a lot of different operations.\r
\r
## Step One : Configuration\r
\r
[aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) will create a "default profile" to store your default Access Key ID and Secret Access Key in a file on your local machine, under the current user. These defaults will be used if you do not specify what credenials to use at runtime. You can specify multiple profiles, which would let you split up the access keys or regions for your development resources and your production resources, for example.\r
\r
[This article](https://www.stevejgordon.co.uk/credential-loading-and-the-aws-sdk-for-dotnet-deep-dive) does a great job of showing what your code looks like with and without these defaults:\r
\r
{.mb-0}**Without Defaults**\r
\`\`\`csharp\r
public class Startup\r
{\r
    public void ConfigureServices(IServiceCollection services)\r
    {\r
        services.AddAWSService<IAmazonDynamoDB>(new AWSOptions\r
        {\r
            Credentials = new BasicAWSCredentials("abc", "def"), // Your secret information\r
            Region = RegionEndpoint.USWest2\r
        });\r
    }\r
}\r
\`\`\`\r
\r
**With Defaults**\r
\`\`\`csharp\r
public class Startup\r
{\r
    public void ConfigureServices(IServiceCollection services)\r
    {\r
        services.AddAWSService<IAmazonDynamoDB>();\r
    }\r
}\r
\`\`\`\r
\r
**With Profiles**\r
\`\`\`csharp\r
public class Startup\r
{\r
    public void ConfigureServices(IServiceCollection services)\r
    {\r
        services.AddAWSService<IAmazonDynamoDB>(new AWSOptions\r
        {\r
            Profile = "default"\r
        });\r
    }\r
}\r
\`\`\`\r
\r
For C# Web Applications, you can also leverage [ASP.NET Environment-Based Startup](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-5.0#environment-based-startup-class-and-methods) options to use different profiles based on whether you're running in development or production environments:\r
\`\`\`csharp\r
public class Startup\r
{\r
    public IConfiguration Configuration { get; }\r
    private readonly IWebHostEnvironment _env;\r
\r
    public Startup(IConfiguration configuration, IWebHostEnvironment env)\r
    {\r
        Configuration = configuration;\r
        _env = env;\r
    }\r
\r
    public void ConfigureServices(IServiceCollection services)\r
    {\r
        services.AddAWSService<IAmazonDynamoDB>(new AWSOptions\r
        {\r
            Profile = _env.IsProduction() ? "production" : "default"\r
        });\r
    }\r
}\r
\`\`\`\r
\r
## Resources\r
\r
* [AWS Official Docs](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)\r
* [Steve Gordon's Blog](https://www.stevejgordon.co.uk/credential-loading-and-the-aws-sdk-for-dotnet-deep-dive)\r
* [Microsoft Docs on Startup Configuration](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments?view=aspnetcore-5.0#environment-based-startup-class-and-methods)`,M=`---\r
title: 'Azure AD / AD B2C Notes'\r
date: '2021-02-23'\r
description: Notes regarding Azure AD / AD B2C\r
tags: azure\r
---\r
\r
Azure Active Directory & Active Directory Business To Customer, abbreviated as "Azure AD" and "Azure AD B2C," are at least one option that Microsoft provides for authentication in the cloud. I only mention authentication because, as far as I can tell, authorization is either sorely lacking or completely absent.\r
\r
## Authentication vs Authorization, What's the Difference?\r
\r
This [Stackoverflow Answer](https://stackoverflow.com/a/6556548/2747660) is probably the most succint explanation I've read on the difference:\r
\r
> Authentication is the process of ascertaining that somebody really is who they claim to be.\r
> Authorization refers to rules that determine who is allowed to do what. E.g. Adam may be authorized to create and delete databases, while Usama is only authorised to read.\r
\r
## Why I Wanted It\r
\r
I have a few different personal websites that I've set up for various reasons. Almost all of them are one-off, proof of concept things. I don't really want people getting in and mssing around with the data. So I've had to re-implement authentication multiple times. Sure, Microsoft's project templates make it pretty easy, and you can copy-paste from one project to another, or even make your own personal authentication and authorization package to try and stop repeating yourself.\r
\r
But copy-pasting only gets you so far. If it turns out there's a security flaw in the implementation of one site, then they're all potentially flawed. If I want to branch out and try building a website with a different backend, then I may need to start over anyway. At least using Azure AD, I can be fairly confident that I won't be the only website that had a security flaw. Plus, since almost all of the functionality for Azure AD authentication is inside the respective NuGet packages, deploying security patches is fairly easy.\r
\r
## How'd It Go?\r
\r
Over the course of a few hours, I read through dozens of Microsoft Tutorials, and watched several videos. I can now set up an AD App in the cloud and create a new MVC Web App using cloud authentication in 30 minutes or less. All in all, not a terrible steep learning curve. The biggest problem was that the UI has changed quite a bit over time, as have the vended libraries. The first time I got it working, I was using \`Microsoft.AspNetCore.Authentication.AzureADB2C.UI\` (I think), but that package is apparently deprecated in favor of \`Microsoft.Identity.Web\` and \`Microsoft.Identity.Web.UI\`. But only half of the related packages **say** "please stop using the deprecated packages."\r
\r
## My Grievances\r
\r
1. Because there are so many different client side frameworks and packages, there is a lot of documentation to wade through to find the one that matches what you think you're trying to do.\r
1. The docs related to authentication and authorization were a lot harder to skim than most of the other Microsoft docs I've read. Either I don't understand the topic, or whomever authored the auth docs I've read was targeting a different audience more familiar with the domain.\r
1. The UI seems to change quite frequently, which meant a lot of pages have outdated screenshots. Or described a user flow that didn't exist (referencing buttons that didn't exist, for example).\r
1. When setting up an Active Directory client, the Azure portal swaps you to a different login. Confusing until you get used to it.\r
\r
## Resources\r
\r
* [Microsoft Dev Blogs](https://devblogs.microsoft.com/aspnet/user-accounts-made-easy-with-azure/)\r
* [Azure Tutorial Docs](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows)\r
 * **Note:** It turns out this is outdated already\r
 * [Microsoft.Identity.Web Sample Project](https://docs.microsoft.com/en-us/samples/azure-samples/active-directory-aspnetcore-webapp-openidconnect-v2/enable-webapp-signin/) - Specifically, the one for OpenIDConnect & Azure AD B2C helped out a ton\r
 * [Sample Project for Microsoft.Identity.Web and AAD B2C](https://github.com/Azure-Samples/active-directory-aspnetcore-webapp-openidconnect-v2/tree/master/1-WebApp-OIDC/1-5-B2C)\r
 * [StackOverflow Answer for 404 on Sign Out](https://stackoverflow.com/questions/59949443/how-to-fix-error-404-when-logging-out-on-an-asp-net-core-mvc-app-against-azure-a)\r
 * https://github.com/azure-ad-b2c/samples/tree/master/policies/relying-party-rbac`,E=`---\r
title: 'Goodbye Jekyll, Hello Next.js'\r
date: '2023-01-15'\r
---\r
\r
When I first created this blog back in 2018, I used [Jekyll](https://jekyllrb.com/). I was somewhat familiar with Ruby, and at the time it seemed like Jekyll was *the* static website generator for a blog. And things were technically fine. In 2022, I came across [Next.js](https://nextjs.org/), a React framework that provides out-of-the box support for static website generation, and pretty good documentation. My org at work was slowly adopting React and moving away from Ruby, so I thought it was also time for a change for the personal blog.\r
\r
Overall, it wasn't very hard to switch from one to the other. Both frameworks were built on the idea that your blog posts are written in markdown, with some YAML Front Matter at the top. Next.js's blog tutorial is quite good, and the additional documentation on features is quite good.\r
\r
## Major Changes\r
\r
* Ruby vs React\r
* Injecting custom javascript and stylesheets on individual pages was pretty tricky in React\r
\r
## Minor Changes\r
\r
* I reduced the amount of metadata\r
* I attempted to streamline the styling a little bit`,h=Object.assign({"../posts/2018-12-24-hello-world.md":k,"../posts/2018-12-29-star-rating.md":S,"../posts/2019-01-08-pirate-radio.md":x,"../posts/2019-01-09-azure-search-1.md":A,"../posts/2019-01-10-azure-search-2.md":T,"../posts/2019-02-13-old-links.md":C,"../posts/2019-02-14-code-snippets.md":j,"../posts/2019-02-14-knockout.md":D,"../posts/2019-02-15-magnify.md":z,"../posts/2021-02-21-react-and-dnd.md":P,"../posts/2021-02-22-aws-cli.md":R,"../posts/2021-02-23-azure-ad-b2c.md":M,"../posts/2022-11-19-goodbye-jekyll-hello-nextjs.md":E}),d=Object.keys(h).map(t=>B(t,h[t])).sort(W);function N(t){return d.filter(a=>a.title===t)[0].content}function O(t){return d.slice(0,t)}function B(t,n){const a=t.slice(3,-3),i=a.match(/(\d{4}(-\d{2})+)/)[1],r=a.slice(17),o=_(a);return{content:n,path:t,name:a,date:i,title:r,url:o}}function _(t){const n=t.slice(0,17).replaceAll("-","/"),a=t.slice(17),i=`/${n}${a}`;return console.info(`URL for ${t}: ${i}`),i}function W(t,n){return t.date<n.date?1:t.date>n.date?-1:0}function G(){const t=O(5).map(n=>e.jsxs("div",{className:"blog-post-link",children:[e.jsx("div",{children:"URL"}),e.jsx("div",{children:e.jsx(l,{to:n.url,children:n.url})}),e.jsx("div",{children:"Name"}),e.jsx("div",{children:n.name}),e.jsx("div",{children:"Path"}),e.jsx("div",{children:n.path}),e.jsx("div",{children:"Title"}),e.jsx("div",{children:n.title}),e.jsx("div",{children:"Date"}),e.jsx("div",{children:n.date})]},n.name));return e.jsx(e.Fragment,{children:t})}function q(){return e.jsxs("article",{children:[e.jsx("p",{children:"My name is John Siddoway. I have been a professional software engineer for about 10 years now.  I live in the Seattle, WA, area with my wife, our two kids, and our menagerie of pets. In my scant free time, you can find me playing video games, tabletop games, or attempting to keep my classical guitar skills up to snuff."}),e.jsx("p",{children:"I'm mostly writing up this blog to keep track of stuff I've been learning about in my personal time."})]})}function L(){return e.jsx("article",{children:e.jsx("ul",{className:"list-unstyled",children:e.jsx("li",{children:"List items go here"})})})}const U=p({html:!0,breaks:!0,linkify:!0});function F(){const t=m(),n=N(t.id),a=g(n),i=U.use(f).render(a.content);return e.jsxs("article",{className:"post",children:[e.jsxs("div",{className:"post-header",children:[e.jsx("h1",{children:a.data.title}),e.jsx("div",{children:a.data.date})]}),e.jsx("div",{dangerouslySetInnerHTML:{__html:i}})]})}function H(){return e.jsx(w,{children:e.jsxs(s,{Component:I,children:[e.jsx(s,{index:!0,element:e.jsx(G,{})}),e.jsx(s,{path:"/about",element:e.jsx(q,{})}),e.jsx(s,{path:"/archive",element:e.jsx(L,{})}),e.jsx(s,{path:"/posts/:year/:month/:day/:id",element:e.jsx(F,{})})]})})}b.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(v,{children:e.jsx(H,{})})}));
