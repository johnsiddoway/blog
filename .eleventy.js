const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const markdownItAttrs = require("markdown-it-attrs");
const jsxPlugin = require('./jsxPlugin.js');
const sassPlugin = require('./sassPlugin.js');
const syntaxHighlight = require("markdown-it-highlightjs");

dayjs.extend(utc);

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

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return dayjs.utc(dateObj).format("dd LLL yyyy");
	});
	
	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return dayjs.utc(dateObj).format('YYYY-MM-DD');
	});

	// Put robots.txt in root
	eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
	eleventyConfig.addPassthroughCopy({ 'src/staticwebapp.config.json': '/staticwebapp.config.json' });

	// Copy anything in the src/assets folder over to ${outputDir}/assets
	eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });

	eleventyConfig.addPlugin(jsxPlugin);
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