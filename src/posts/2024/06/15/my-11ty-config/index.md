---
title:  'How 11ty helped me improve my blog'
date:  '2024-06-15'
layout: post.html
tags: posts
eleventyExcludeFromCollections: true
---

When I first created this blog to document stuff I've been learning, I didn't realize that I would also fall into the bucket of "devs who blog about their blog." But here I am. I started blogging using Ruby and Jekyll for a few reasons: I needed to learn Ruby for work; Jekyll was the recommended static site generator for Github Pages; and I just wanted something to get me started. Then, when my team started to move to React, I tried a few javascript frameworks. I eventually settled on [Eleventy](https://www.11ty.dev/) because it did everything I wanted, and little else. Eleventy comes with minimal opinions about how you should use it, and comes with very little dependencies baked in. 

```
/
|- public/
| |- favicon.ico
| |- robots.txt
| |- magnify.css
| |- magnify.js
| |- star-rating.css
| |- star-rating.js
|- src/
  |- posts/
    |- 2018-12-24-hello-world.md
    |- 2018-12-29-star-rating.md
    |- 2019-02-15-magnify.md
```

After:

```
/
|- public/
| |- favicon.ico
| |- robots.txt
|- src/
  |- posts/
    |- 2018/
    | |- 12/
    |   |- 24/
    |   | |- hello-world.md
    |   |- 29/
    |     |- star-rating/
    |       |- index.css
    |       |- index.js
    |       |- index.md
    |- 2019/
      |- 02/
        |- 15/
          |- magnify/
            |- index.css
            |- index.js
            |- index.md
```