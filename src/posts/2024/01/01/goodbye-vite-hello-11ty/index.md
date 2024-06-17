---
title: 'Goodbye Vite, Hello 11ty'
date: '2024-01-01'
tags: posts
layout: post.html
links:
 - <link rel="stylesheet" href="index.min.css">
 - <script type="module" defer src="index.js"></script>
---

This is the 3rd post in a series I think I'm calling "Oh my god why are there so many static site generators?" The previous entries in this series are:

* [Goodbye Jekyll Hello Nextjs](posts/2023/01/15/goodbye-jekyll-hello-nextjs/index.md)
* [Goodbye Nextjs Hello Vite](posts/2023/06/26/goodbye-next-hello-vite/index.md)

# What was wrong with Vite?

First of all, let me say that Vite seems to be a perfect fit for what I'm looking for in a Single Page Application (SPA) that uses React. It works pretty much straight out of the box, it only has a few opinionated ways of structuring and writing your code, and it has great documentation. However, for my blog it wasn't quite what I was looking for because Vite seemed to want to build a javascript app rather than "opt into" the javascript. I wanted something that would start with simply converting Markdown to HTML, and would let me slowly add javascript where necessary.

# Enter 11ty

[11ty](https://11ty.dev/) seemed to be exactly what I was looking for. It starts off **very** simple, but supports the basic functionality that I was looking for; it converts [Markdown to HTML](https://www.11ty.dev/docs/languages/markdown/) using [markdown-it](https://www.npmjs.com/package/markdown-it), and has support for [layouts](https://www.11ty.dev/docs/layouts/) so each blog post can remain simple markdown files. This made it relatively straightforward to convert from Vite to 11ty and have most of the site working exactly the same as before.

# Partial Hydration

One thing that took me quite a while to figure out (and I'm still working on smoothing out) is how to actually implement [partial hydration](https://en.wikipedia.org/wiki/Hydration_(web_development)), which is bascially a fancy way of saying "add javascript to an otherwise static website." It's basically building websites that would have not been out of place 10-15 years ago when JQuery was the most advanced javascript library.

I think I *finally* have an example of partial hydration working here:

<div id="react-root"></div>

## How it's supposed to work

There should be a button above that you can click that increments a counter. The basic component is borrowed from Ben Holmes' [Building The SSG I've Always Wanted: An 11ty, Vite And JAM Sandwich](https://www.smashingmagazine.com/2021/10/building-ssg-11ty-vite-jam-sandwich/) post that I've referenced before. When he wrote that post though, he seems to have been using an older version of Vite and 11ty, and his code didn't work right out of the box for me the way I expected. I was able to get a version working that basically generated a full React app using 11ty and then served it up with Vite, but 11ty 2.0 already comes with a [dev server](https://www.11ty.dev/docs/dev-server/) option.

That wasn't at all what I wanted. Somehow in my professional career, I seemed to have avoided the "learning to walk" phase of writing build tools and build scripts from scratch, and came in during the "learning to run" phase where entire frameworks existed that would handle the compiling of code into javascript that can easily run in the browser. I'm sure there are plenty of people out there who wouldn't have had any of the problems I encountered, but I was surprised at just how **hard** it was to find a simple explanation or guide of the history of web development that would help teach me to walk.

## Rollup.js

I ended up digging into how Vite compiles the React code into a single javascript file, which led me to [Rollup.js](https://rollupjs.org/). Rollup is basically a competitor of Webpack, so if you really know Webpack, Gulp, or some other such library, then you probably know how Rollup works. But I didn't know, so it's taken me longer than I expected to get it working the way I expected.

The main body of the [jsx plugin](https://github.com/johnsiddoway/blog/blob/1111cf1913324e56152446094cda758e94dadb5b/jsxPlugin.js) that I wrote is mostly straight off of the Rollup docs, but it's wrapped up as an Eleventy module. I had some more trouble at some point until I realized that I only wanted this script to execute on files under `/posts/`, and I only wanted it to execute on files that did not start with an underscore, like `_module.js`. Once I was able to narrow down the scope of what my rollup script was executing against, I was able to do a better job of iterating on the actual Rollup script to finally generate a javascript file for a functional React "app".

```
module.exports = function (eleventyConfig) {
	eleventyConfig.addTemplateFormats(['js', 'jsx']);

	eleventyConfig.addExtension(['js', 'jsx'], {
		outputFileExtension: 'js',

		// `compile` is called once per file in the input directory
		compile: async function (inputContent, inputPath) {
			// If we are not operating on a javascript file under /posts/, return immediately and do nothing
			if (inputPath.indexOf('/posts/') < 0) {
				return;
			}

			// From this point down the inputContent and inputPath are for a "valid" .js / .jsx file in a post directory

			// ommitted the main body for now

			// And then return ... nothing? Not sure why I decided to return nothing
			return;
		}
	});
};
```
