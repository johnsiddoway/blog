const markdownItAttrs = require("markdown-it-attrs");
const sassPlugin = require('./sassPlugin.js');
const syntaxHighlight = require("markdown-it-highlightjs");

module.exports = function (eleventyConfig) {
	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	let idCounter = 0;
	// copy all our /components to the output directory
	// so Vite can find them. Very important step!
	eleventyConfig.addPassthroughCopy('components')

	eleventyConfig.addShortcode('react', function (componentPath) {
		// we'll use idCounter to generate unique IDs for each "root" div
		// this lets us use multiple components / shortcodes on the same page 👍
		idCounter += 1;
		console.info(componentPath);
		const componentRootId = `component-root-${idCounter}`
		return `<div id="${componentRootId}"></div>
	<script type="module">
	  import Component from ${JSON.stringify(componentPath)};
	  import React from 'react';
	  import ReactDOM from 'react-dom';
	  const componentRoot = document.getElementById('${componentRootId}');
	  ReactDOM.render(React.createElement(Component), componentRoot);
	</script>`;
	})

	eleventyConfig.on('beforeBuild', function () {
		// reset the counter for each new build
		// otherwise, it'll count up higher and higher on every live reload
		idCounter = 0;
	})

	// Copy anything in the src/assets folder over to ${outputDir}/assets
	eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });
	eleventyConfig.addPassthroughCopy({ "src/components": "/components" });

	eleventyConfig.addPlugin(sassPlugin);

	eleventyConfig.amendLibrary("md", mdLib => mdLib.use(syntaxHighlight));

	eleventyConfig.setLiquidOptions({
		timezoneOffset: 0 // https://liquidjs.com/tutorials/options.html#Date, set the timezone to UTC when reading dates out of front matter
	});

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		dir: {
			input: "src",
			output: "dist"
		}
	}
};