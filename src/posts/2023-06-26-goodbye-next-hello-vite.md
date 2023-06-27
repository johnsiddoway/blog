---
title: 'Goodbye Next, Hello Vite'
date: '2023-06-26'
---

Earlier this year I started moving this blog off of Ruby and Jekyll. That setup worked fine, but I didn't use Ruby or Jekyll anywhere else in my developer life. So it felt strange to have to keep writing blog posts like that forever. My team at work was finally switching from maintaining an antiquated website running on Ruby on Rails to React on Node, I figured I should actually really *learn* React. So I headed on over to [Jamstack](https://jamstack.org/) for a React-based framework to build a static site. [Next.js](https://nextjs.org) was by far the most-starred option.

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

