---
title: 'React and Monsters and AWS Oh My'
date: '2021-02-21'
description: Learning React through a small D&D app
layout: post.html
tags: posts
---
It's been a while since I've posted anything, but I finally have something worth blogging about. But first, some backstory. 2020 was a pretty rough year for most people, and my family was no exception. I switched to working from home full time, and all social gatherings were either moved online or just cancelled altogether. This included my monthly tabletop gaming group, which was cancelled indefinitely. Sometime during the summer my wife proposed that we try playing D&D together, just the two of us. And so I started DM'ing for her. While learning to DM, I realized a couple of things:
1. I like using physical content (dice, paper record sheets, etc).
2. Flipping back and forth through the Monster Manual or Monster stats of an Adventure book wasn't fast or easy. I needed to get three or four monster stats together on a single sheet of paper for easier play.

Separately, at work we were dealing with a different problem. My team maintained several internal websites, written in a variety of different languages. The oldest was nearly ten years old, and was still limping along using JQuery 1.X, another was using Angular, and a third was using Elm. My team knew this was a problem, and agreed it was finally time to standardize our frontend frameworks. We took a survey, and the winner by a landslide was React. I didn't personally know it, but a lot of the newer engineers on the team had used it at school or at previous jobs and liked it. So, it was time for me to learn React.

So, I built a simple site using React that let me print off any number of D&D Monster Stats. [Link to the repository](https://github.com/johnsiddoway/dnd-cards). I have not yet started hosting the site, but once I do I'll probably edit this post to include a link to the live version as well.

## Part One: What I Wanted

I just wanted a simple site that I could select one or multiple D&D monsters and print them out. There's a set of cards [for sale on Amazon.com](https://smile.amazon.com/dp/B07KJFS9VM) that is probably what most people use in this situation. This particular set is a little limited in the list of monsters that it supports, but it probably works for the vast majority of D&D games happening in a typical setting.

There's also [this Reddit post](https://www.reddit.com/r/DMAcademy/comments/8i5ngw/monster_stats_cards/) that lists several alternatives. Most of these alternatives are limited to just monsters from the 5e SRD (System Reference Document), which is a specific list of monsters that Wizards of the Coast allows people to republish. If you want to publish something that isn't in the 5e SRD, you need official approval from WotC.

* [This set on Drivethru RPG for $5.00 or PWYW](https://www.drivethrurpg.com/product/205572)
* [monstercards.ca](http://monstercards.ca/)
* [hardcodex.ru/monsters](http://hardcodex.ru/monsters/)
* [A free set on DeviantArt](https://www.deviantart.com/almega-3/gallery/58595208/dnd-5e-monster-cards)
* [Form-fillable PDFs](https://www.thearcanelibrary.com/collections/all/products/fillable-monster-cards)

While almost any of these options would probably work, I decided to re-invent the wheel. This is mostly for my personal curiosity and use, but I still thought it would be worthwhile to blog about.

## Part Two: Proof of Concept

As my first pass, I built a single page application using a javascript framework I know quite well: [Knockout.js](https://knockoutjs.com/). I stored data in two different text files: one with monsters from the 5e SRD, and one with monsters that were not. This let me feel more confident about pushing the proof of concept out to Github [here](https://github.com/johnsiddoway/dnd-cards/tree/93a50c16f11092bcc791188b2674817691fbd042), since there was nothing in it from D&D that wasn't in the 5e SRD, and therefore it should be safe to have in a public repository.

This worked pretty well. There was a search box that let me click on the name of the monster I wanted to print, and I had come up with three different layouts for monsters with different amounts of stat information (some monsters really do take up nearly a full sheet of paper). It would dynamically stretch content out to fit onto new sheets of paper, and also shrink back down to a smaller number of pages if you removed items from the list of selected monsters.

## Part Three: Porting to React

Before using React here, my only exposure to it was doing [the offical Tic-Tac-Toe tutorial](https://reactjs.org/tutorial/tutorial.html). I'm pretty sure I coded that up over one weekend, and then started rewriting my D&D Cards up the next weekend. It turned out to not be that bad, mostly moving code [in this commit](https://github.com/johnsiddoway/dnd-cards/commit/5b946c9d886017e252502380e326a29a97b9d622) from `index.html` (the layout, knockout bindings, and css tags) and `app.js` (the event-driven behavior) into `src/App.js`, which holds both the layout and behavior for React components in one file.

I didn't split the components into separate files, which I think is recommended for larger and more "real" applications. This is a proof of concept, but I don't think the React side of the code is going to grow a lot from what it is today. Components are intended to be reusable pieces that can be plugged into your UI in different places or different ways, but my UI isn't going to change much in the future. I should probably review my code with my coworkers, and maybe find a React SME (Subject Matter Expert) to figure out if there are other ways my code doesn't match React standards / guidelines.

## Part Four: Where Does AWS Come In?

I mostly used Azure for my personal development up until now, but AWS DynamoDB has a very compelling free tier. I also figure that, since this site is basically just me messing around, I might as well try something a little different. My plan for a longer-term implementation involves storing the stat blocks in Dynamo, and allowing authorized users to add & edit entries. Once I get that set up, I will probably make another post detailing some of my experiences.