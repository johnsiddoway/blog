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