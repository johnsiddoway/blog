---
title: 'Goodbye Next, Hello Vite'
date: '2023-06-26'
layout: post.html
tags: posts
---

Earlier this year I started moving this blog off of Ruby and Jekyll. That setup worked fine, but I didn't use Ruby or Jekyll anywhere else in my developer life. So it felt strange to have to keep writing blog posts like that forever. My team at work was finally switching from maintaining an antiquated website running on Ruby on Rails to React on Node, I figured I should actually really *learn* React. So I headed on over to [Jamstack](https://jamstack.org/) for a React-based framework to build a static site. [Next.js](https://nextjs.org) was by far the most-starred option. So I gave it a whirl.

To reiterate: The reasons I opted to abandon Jekyll and Ruby on Rails:

* I wasn't using Ruby on Rails anywhere else
* I was starting to use Node and React at work, and wanted a reason to practice it at home
* I wanted to build (or migrate) a couple of functional websites to use a common framework. In my case, React.

## Blog 2.0: Next.js

And so I ported this site over to Next.js. It technically worked fine, but there was something that didn't quite feel right. If you looked at the files on disc, it was something like below. If I've been reading this all correctly, there's 115 kB of javascript on every page. 27.9 kB of which is actually CSS (more on that later), so it's actually 87.1 kB of javascript. But this blog was intentionally planned to be as lean and lightweight as possible. None of that javascript is actually necessary for any of the pages to load. But I couldn't figure out how to get rid of it, short of writing a custom script to go into the `out` folder, open every `.html` file, and remove every javascript reference I didn't think I had intentionally added myself.

```
Route (pages)                                     Size     First Load JS
┌ ● / (2608 ms)                                   705 B           115 kB
├   /_app                                         0 B            86.9 kB
├ ○ /404                                          194 B          87.1 kB
├ ○ /about                                        542 B          87.4 kB
├ ● /archive (2406 ms)                            683 B           115 kB
└ ● /posts/[id] (34150 ms)                        831 B           116 kB
    ├ /posts/2019-01-09-azure-search-1 (4076 ms)
    ├ /posts/2018-12-29-star-rating (3936 ms)
    ├ /posts/2019-01-10-azure-search-2 (3819 ms)
    ├ /posts/2019-01-08-pirate-radio (3756 ms)
    ├ /posts/2018-12-24-hello-world (3614 ms)
    ├ /posts/2019-02-15-magnify (3523 ms)
    ├ /posts/2019-02-14-code-snippets (2193 ms)
    └ [+6 more paths] (avg 1539 ms)
+ First Load JS shared by all                     115 kB
  ├ chunks/framework-5f4595e5518b5600.js          42 kB
  ├ chunks/main-2c63e9d6d78527a4.js               31 kB
  ├ chunks/pages/_app-b565fe882086f0ed.js         13.1 kB
  ├ chunks/webpack-9b312e20a4e32339.js            836 B
  └ css/b7be99a61a4b05b0.css                      27.9 kB
```

## Alternatives to Next.js I Explored

After getting the Next.js version of the blog up and running, I decided to try a couple other framework options while building a couple of SPA sites. If you look at [the official docs](https://react.dev/learn/start-a-new-react-project), they list a few options: [Next.js](https://nextjs.org/), [Remix](https://remix.run/), [Gatsby](https://www.gatsbyjs.com/), and [Expo](https://expo.dev/). I tried all of these other options, and none of them really felt right either. So I started doing my own googling to alternatives, and **holy shit** are there a lot out there. I tried [create-react-app](https://create-react-app.dev/), [Eleventy, aka 11ty](https://www.11ty.dev/), [Hugo](https://gohugo.io/), [React Static](https://github.com/react-static/react-static), and [Vite](https://vitejs.dev/).

I even came across a couple of very interesting blog posts on writing your own Static Site Generator (SSG): Oğuzhan Olguncu wrote a blog post titled [react-ssr-ssg-from-scratch](https://ogzhanolguncu.com/blog/react-ssr-ssg-from-scratch) in August 2022 that was very in-depth, and Ben Holmes wrote [Building The SSG I’ve Always Wanted: An 11ty, Vite And JAM Sandwich](https://www.smashingmagazine.com/2021/10/building-ssg-11ty-vite-jam-sandwich) back in October 2021.

## Why Vite

At the end of the day, I liked Vite the most. Many of the other frameworks felt very mature, but with that maturity came downsides (for me) in one of two flavors. Either the framework (or possibly just its documentation) had very specific opinions about the frameworks input (how I write my code), or the framework was built to generate a specific type of output.

Eleventy appeared to be designed for taking **only** static files of various inputs and transforming them into HTML. That's great for a blog, but because I wanted to build web apps (not just web *pages*), it didn't quite fit. Gatsby appeared to be targeted at devs who had their data in a Content Management System (CMS), which I did not. I had a handful of markdown files in Git.

Vite seemed like the best balance of "write the code my way" and "helpful features you can opt into when you're ready." One or more of the other options I listed (or one of the dozens that I didn't even try) might be just as good. But at some point I needed to pick something.

## Why Not Vite (For a Blog)

One problem my blog currently has is that it's not *actually* a fully static site: It's a React App, so if users have Javascript disabled then none of my posts show up. And due to how I'm parsing markdown to HTML, the bundled javascript assets are **even bigger than before**. Take this example output from running `npm run build` today:

```
vite v4.3.9 building for production...
transforming (401) node_modules\is-extendable\index.jsnode_modules/gray-matter/lib/engines.js (43:13)
  Use of eval in "node_modules/gray-matter/lib/engines.js" is strongly discouraged as it poses security risks and may cause issues with minification.
✓ 502 modules transformed.
dist/client/index.html                     0.56 kB │ gzip:   0.35 kB
dist/client/assets/index-5a597e99.css      7.94 kB │ gzip:   2.31 kB
dist/client/assets/index-574286f7.js      77.72 kB │ gzip:  26.80 kB
dist/client/assets/vendor-fd9eadec.js  1,314.43 kB │ gzip: 426.60 kB

(!) Some chunks are larger than 500 kBs after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 5.11s
```

I was kind of upset about Next.js including 87.1 kB on every page, but I'm currently pushing out **500% more javascript** than before. There were actually a few small "hacks" I had to implement just to get this to work at all.

## Final Decision: Stay on Vite or go back to Next?

Ultimately, I have decided to stick with Vite. I'm already using it in two other small SPAs and I really like what it brings to the table: starting a local server for local development; Hot Module Replacement (HMR) so I don't have to keep stopping and restarting said local server; Minimal opinions on how I write my code; Lots of features and plugins that I can opt into once I'm ready to do learn something new or do something different.

I'm also going to be revisiting Oğuzhan Olguncu's blog post on how to [Build Your Own SSR/SSG From Scratch with Vite and React](https://ogzhanolguncu.com/blog/react-ssr-ssg-from-scratch). The first time I tried following his instructions, I didn't have a working Vite version of my site at all and I think I bit off more than I could chew at once. Like I mentioned above, there were some problems in getting the React App to work at all with dynamically transforming Markdown to HTML. Now that I've got those sorted out, I think I can follow Oğuzhan's post and generate a truly static version of my blog.

Note: Oğuzhan's post is actually very similar to Vite's own [Server-Side Rendering (SSR)](https://vitejs.dev/guide/ssr.html) documentation and [ssr-react Github Example](https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react). I haven't dug through the Vite example's commit history to figure out which came first, but I also don't really care.