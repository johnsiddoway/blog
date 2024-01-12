const markdownItAttrs = require("markdown-it-attrs");
const sassPlugin = require('./sassPlugin.js');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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

	eleventyConfig.addPassthroughCopy({ "src/styles/*.css": "/" });

	eleventyConfig.addPlugin(sassPlugin);

	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAttrs));

	eleventyConfig.setLiquidOptions({
		timezoneOffset: 0 // https://liquidjs.com/tutorials/options.html#Date, set the timezone to UTC
	});

	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		dir: {
			input: "src",
			output: "dist"
		}
	}
};