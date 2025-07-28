---
title: 'Vite SSR and SSG'
date: '2023-06-29'
layout: post.html
tags: posts
---

As noted in [my previous post](/posts/2023/06/26/goodbye-next-hello-vite), my initial migration to [Vite](https://vitejs.dev/) was incomplete (in my mind) because the blog was still being built like a traditional React web app. It turns out that moving to fully static was quite easy, once I had everything else sorted out.

## Before SSG

When my site was getting posted as a traditional React app, it needed to include all of the various libraries I am using to parse markdown and YAML front matter into HTML:

* `gray-matter` to convert the first few lines of each file into key-value pairs I can access in javascript
* `markdown-it` to convert the rest of each file into HTML
* `highlight.js` and `markdown-it-highlightjs` to add classnames to `<pre> <code>` blocks for language specific syntax highlighting
* `vite-plugin-node-polyfills` to help provide polyfills for certain Node.js globals for server-side code that aren't normally available in Vite, since Vite is expected to run client-side

Once I had added all of these various libraries to my package and got my site to work, I was not pleased with the size of the bundled javascript. Every single visitor to my site was getting hit with 453.40 kB of javascript assets. That's quite a bit for what is essentially just text with markup. Additionally, if someone had decided they wanted to disable javascript, my blog wouldn't work at all.

```bash
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

## After SSG

After following [Vites SSR Guide](https://vitejs.dev/guide/ssr.html) and referencing their [React Example](https://github.com/vitejs/vite-plugin-react/tree/main/playground/ssr-react), I was able to make my site truly static. The homepage of the blog loads three files, for a total payload of 4.3 kB. That's so small that I couldn't come up with a good comparison for what takes up 4 kB off the top of my head. [This StackOverflow Answer](https://stackoverflow.com/a/29298122) has a block of text that should take up 4 kB, and when I asked Google "[how many characters fit in 4 kB](https://www.google.com/search?q=how+many+characters+fit+in+4+kB)", it turns out that web cookies have a max size of 4 kB. So, my blog's homepage can very nearly fit inside a single cookie. Not bad.

```bash
index.html                                 0.6 kB
/assets/index-{guid}.css                   2.3 kB
favicon.png                                1.4 kB
```