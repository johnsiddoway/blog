---
title: 'Goodbye Next, Hello Vite'
date: '2023-06-26'
---

This is the 3rd post in a series I think I'm calling "Oh my god why are there so many static site generators?" The previous entries in this series are:

* [Goodbye Jekyll Hello Nextjs](./2023-01-15-goodbye-jekyll-hello-nextjs.md)
* [Goodbye Nextjs Hello Vite](./2023-06-26-goodbye-next-hello-vite.md)

# What was wrong with Vite?

First of all, let me say that Vite seems to be a perfect fit for what I'm looking for in a Single Page Application (SPA) that uses React. It works pretty much straight out of the box, it only has a few opinionated ways of structuring and writing your code, and it has great documentation. However, for my blog it wasn't quite what I was looking for because Vite seemed to want to build a javascript app rather than "opt into" the javascript. I wanted something that would start with simply converting Markdown to HTML, and would let me slowly add javascript where necessary.

# Enter 11ty

[11ty](https://11ty.dev/) seemed to be exactly what I was looking for. It starts off **very** simple, but supports the basic functionality that I was looking for; it converts [Markdown to HTML](https://www.11ty.dev/docs/languages/markdown/) using [markdown-it](https://www.npmjs.com/package/markdown-it), and has support for [layouts](https://www.11ty.dev/docs/layouts/) so each blog post can remain simple markdown files. This made it relatively straightforward to convert from Vite to 11ty and have most of the site working exactly the same as before.