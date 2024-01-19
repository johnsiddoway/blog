const path = require("node:path");
const { rollup } = require("rollup");
const babel = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');
const scss = require('rollup-plugin-scss');

module.exports = function (eleventyConfig) {
	eleventyConfig.addTemplateFormats(['js', 'jsx']);

	eleventyConfig.addExtension(['js', 'jsx'], {
		outputFileExtension: 'js',

		// `compile` is called once per file in the input directory
		compile: async function (inputContent, inputPath) {
			if (inputPath.indexOf('/posts/') < 0) {
				return;
			}

			let bundle = null;
			let parsed = path.parse(inputPath);
			let output = null;
			const outputPath = `${parsed.dir.replace('./src/', 'dist/')}/index.js`;
			const outputOptions = {
				file: outputPath,
				format: "iife",
				sourcemap: false,
				name: 'page',
			};
			try {
				// create a bundle
				bundle = await rollup({
					input: inputPath,
					output: outputOptions,
					onwarn(warning, warn) {
						if (
							warning.code === "MODULE_LEVEL_DIRECTIVE" &&
							warning.message.includes(`"use client"`)
						) {
							return;
						}
						warn(warning);
					},
					plugins: [
						replace({
							preventAssignment: true,
							'process.env.NODE_ENV': JSON.stringify('production')
						}),
						nodeResolve({
							browser: true,
							// extensions: [".js", ".jsx", ".ts", ".tsx"],
							// dedupe: ['react', 'react-dom'],
						}),
						commonjs(),
						babel({
							// exclude: "**/node_modules/**",
							presets: ["@babel/preset-env", "@babel/preset-react"],
							babelHelpers: 'bundled',
							// extensions: [".js", ".jsx", ".ts", ".tsx"],
						}),
						scss({ fileName: `index.css` }),
						terser(),
					]
				});

				output = await bundle.write(outputOptions);
			} catch (error) {
				// do some error reporting
				console.error(error);
			}
			if (bundle) {
				// closes the bundle
				await bundle.close();
			}

			return;
		}
	});
};