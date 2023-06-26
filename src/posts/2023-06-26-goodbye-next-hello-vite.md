---
title: 'Goodbye Next, Hello Vite'
date: '2023-01-15'
---

Earlier this year I started moving this blog off of Ruby and Jekyll. That setup worked fine, but I didn't use Ruby or Jekyll anywhere else in my developer life. So it felt strange to have to keep writing blog posts like that forever. My team at work was finally switching from maintaining an antiquated website running on Ruby on Rails to React on Node, I figured I should actually really *learn* React. So I headed on over to [Jamstack](https://jamstack.org/) for a React-based framework to build a static site. [Next.js](https://nextjs.org) was by far the most-starred option.

And so I ported this site over to Next.js. It technically worked fine, but there was something that didn't quite feel right. Even thought it was labeled as a "Static Site Generator," it was actually just rolling up all of my blog posts into a React app, and packaging it up as a single javascript file. If you looked at the files on disc, it was something like this:

```
/
├── index.html
├── index.css
└── index.js
```