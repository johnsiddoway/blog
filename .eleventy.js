const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const anchor = require("markdown-it-anchor");
const attributes = require("markdown-it-attrs");
const highlightjs = require("markdown-it-highlightjs");
const jsxPlugin = require('./jsxPlugin.js');
const sassPlugin = require('./sassPlugin.js');

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

	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return dayjs.utc(dateObj).format('YYYY-MM-DD');
	});

	eleventyConfig.addFilter("readableDate", (dateObj) => {
		return dayjs.utc(dateObj).format("dd LLL yyyy");
	});

	// Copy anything in the /public/ folder over to ${outputDir}/
	eleventyConfig.addPassthroughCopy({ "public": "/" });

	eleventyConfig.addPlugin(jsxPlugin);
	eleventyConfig.addPlugin(sassPlugin);

	eleventyConfig.amendLibrary("md", mdLib => mdLib.use(attributes).use(anchor).use(highlightjs));

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