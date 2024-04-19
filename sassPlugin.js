const path = require("node:path");
const sass = require("sass");

module.exports = function (eleventyConfig) {
	eleventyConfig.addTemplateFormats("scss");

	// Creates the extension for use
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css", // optional, default: "html"

		compileOptions: {
			permalink: function (contents, inputPath) {
				let parsed = path.parse(inputPath);
				const output = (inputPath.includes('posts/'))
					? `${parsed.dir.replace('./src', '')}/${parsed.name}.css`
					: `/${parsed.name}.css`;
				console.info(`${inputPath} -> ${output}`);
				return (data) => {
					return output;
				}
			}
		},

		// `compile` is called once per .scss file in the input directory
		compile: async function (inputContent, inputPath) {
			let parsed = path.parse(inputPath);
			if (parsed.name.startsWith("_")) {
				return;
			}

			let result = sass.compileString(inputContent, {
				loadPaths: [
					"node_modules",
					parsed.dir || ".",
					this.config.dir.includes
				]
			});

			this.addDependencies(inputPath, result.loadedUrls);

			// This is the render function, `data` is the full data cascade
			return async (data) => {
				return result.css;
			};
		}
	});
};