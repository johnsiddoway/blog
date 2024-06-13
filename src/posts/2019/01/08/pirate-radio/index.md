---
title:  'Pirate Radio'
date: '2019-01-08'
description: 'A brief history on a personal project'
layout: post.html
tags: posts
---

I don't think I can (or should) talk about what I do for work here. First of all, the majority of my learnings at work these days don't feel like they have general application. Second of all, and probably more importantly, I have no idea whether or not I'd be violating any NDAs. So instead, I'm going to focus on things I learn about in my (limited) free time. When I want to practice new concepts or try implementing a feature of some sort, I try to find a way to integrate it into a personal project.

Many years ago, I created a personal website to stream my personal music library. I built it to practice working on full stack applications in C# (the language I was using at work at the time). I've used a couple different source control solutions over the years, so my commit history isn't very consistent. The earliest commit date I can find is in February 2014 from Visual Studio Online, and the solution is fully fleshed out. I think it's safe to say that I originally built it in 2012, probably with ongoing bugfixes and feature development going forward.

In 2015, I switched companies, and pretty much everything in my work experience changed. I didn't need or have time to learn new things on my own time, I had plenty to learn about at work. Personal projects stopped for a time.

Fast forward to September 2017. .NET Core 2.0 was released [in August](https://blogs.msdn.microsoft.com/dotnet/2017/08/14/announcing-net-core-2-0/). Font Awesome 5 Alpha was released [in June](https://www.kickstarter.com/projects/232193852/font-awesome-5/posts/1919869). Bootstrap 4 Beta was released [in August](https://blog.getbootstrap.com/2017/08/10/bootstrap-4-beta/). I decided that this was a good time to refresh my longest-running personal project. Instead of just cloning or branching my existing repo, I decided to start fresh in BitBucket. I am pretty sure there were two key reasons for this choice: free private repos, and Trello kanban board integration. As if this wasn't enough changes, I decided to play around with npm and Webpack for managing front-end packages. I had not used either before.

And so, in September of 2017, I started building a .NET Core version of my personal music site, Pirate Radio. The website itself is pretty basic, but it does its basic job quite well. The two primary functions I want it to perform: allow myself or my wife play our home music library anywhere we have internet access, and don't let anyone else in. And it does those two jobs fairly well. Between Sept 2017 and March 2018, I rewrote / copied the important functionality, and haven't really had a chance to work on it since. There are a few updates I'd like to make, and the plan is to record my experiences making those updates as I make those changes.

<img src="/assets/img/2019-01-08-pirate-radio-01.png" class="img-fluid" alt="Pirate Radio Screenshot">