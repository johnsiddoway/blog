---
title: 'Azure Search Part 2'
date: '2019-01-10'
description: 'Discussing my experience with Azure Search'
tags: azure
---
### Backstory
One of the features I considered "nice to have" in Pirate Radio was the ability to search for a specific song or songs.

In Pirate Radio 1.0, I did this in a *very* complicated manner, building Linq Predicate Builders from [LINQKit](http://www.albahari.com/nutshell/linqkit.aspx). This worked, but if I remember correctly it was very slow. For 1.next (I don't know exactly when I changed this), I replaced the LINQ with a generic SQL query, and then generating `WHERE` clauses in code based on the split input search string. This means that if you input 'The Beatles Yellow Submarine' I will return anything that contains 'The' or 'Beatles' or 'Yellow' or 'Submarine'. Simpler code, ran faster, but not great search results. This is also sub-optimal architecture (which I will dive into later).

For Pirate Radio v2.0, I knew I wanted something better, but I didn't want to spend a lot of time rolling my own solution. So for my first pass, I dropped the code generation and just returned results where the entire search string was in the Artist Name, Album Name, or Track Title fields. So searching for 'The Beatles Yellow Submarine' would return nothing, but 'Yellow Submarine' would return just tracks on the Yellow Submarine album or the Yellow Submarine song on other albums. Simple and workable, but not great. This was still sub-optimal architecture.

For Pirate Radio v2.next, I decided to try out Azure Search to provide a more intuitive search experience. I found a few decent resources on how to set it up, which I will link at the bottom. I actually didn't like Microsoft's official docs, because there was so much content it was tough to figure out where to start. Instead of just re-writing these guides, I plan on expanding on them by showing a more "real world" example of how I'm using it.

### Why Azure
There are a few options out there for hosted search engines. My top three options were Algolia, Amazon AWS CloudSearch, and Azure Search. According to the [AWS CloudSearch Pricing](https://aws.amazon.com/cloudsearch/pricing/) page, CloudSearch does not have an "always free" tier. Algolia has a [Free For Open Source](https://www.algolia.com/for-open-source) pricing tier, and Azure has an [Always-Free Tier](https://azure.microsoft.com/en-us/free/#always-free). I ended up going with Azure because Pirate Radio is actually a private repo, and I didn't want to bother with changing it or applying for free pricing when Azure already had what I needed for my simple testing:
* 3 Indexes
* 50 MB storage (across all 3 indexes)
* Standard Data Transfer Rates (5 GB/month is free, I think across all Azure services in your account)

While not exactly drawbacks, there are a couple of items I'd like to call out with Azure Search:
* Index Keys must be strings
* Upload Batches must be under 5MB (or possibly 1,000 documents)

### My Experience
The 50 MB free storage was plenty for my use case.  My simple Track model for the index averages 136 bytes. Even for my large library (more than 150k tracks), I'm using less than half of the available storage. That should be plenty of space to expand my model to include other fields (like a list of tags per track, and/or genre) while still remaining free.

Out of the box, the functionality was exactly what I was looking for. I look forward to adding in Scoring Profiles to try and fine-tune the search results.

### Improved Architecture
Building clean code and well-architected code is a constant effort. There are tons of posts just dedicated to the topic, and I will probably write my own post (or series of posts on it) myself in the future. For now, I'll just expand on why I think searching on your primary database is not good architecture.

For Pirate Radio, the database stores normalized information about all of the music files I have in my digitized music library. 90% or more of the operations against that data is reads. And the rate of reads is exteremly low, probably averaging one read a minute. The most common read request is "I want to play Track X. What's the path to the file on the network for me to go read?" Real production databases will have much higher rates of access. I've worked with database dealing with hundreds of requests a second. Everyone wants those requests to come back as quickly as possible; users will notice if your UI takes longer than 3 seconds to load or respond.

In Pirate Radio, running search queries on my primary database are not really impacting production work. But in larger systems, it definitely would. Additionally, dedicated search systems are specifically designed for running queries incredibly fast. They are the right tool for this job. If the Search system goes down, someone using your system might be working slower but they're probably not even going to file a ticket. If your primary database is getting overloaded by search requests and nothing else is getting through, your users are *definitely* going to notice. Two phrases come to mind: *"Don't pull all your eggs in one basket"* and *"When the only tool in your toolbelt is a hammer, every problem looks like a nail."* Learning to use S

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