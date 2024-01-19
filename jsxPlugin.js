const path = require("node:path");
const { rollup } = require("rollup");
const fs = require("node:fs/promises");
const babel = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');

async function compile(componentPath, outputPath, idCounter) {
	let parsed = path.parse(componentPath);
	let outputFilePath = outputPath;
	if (outputFilePath === null) {
		outputFilePath = `/assets/${parsed.name}.js`;
	}

	// we'll use idCounter to generate unique IDs for each "root" div
	// this lets us use multiple components / shortcodes on the same page 👍
	const componentRootId = `component-root-${idCounter}`
	const javascriptToConvert = `import React from 'react';
import ReactDOM from 'react-dom';
import Component from './${componentPath}';
ReactDOM.createRoot(document.getElementById('${componentRootId}')).render(<Component />);`;

	console.info(`Input Path: ${componentPath}`);
	console.info(`Output Path:${outputFilePath}`);

	await build(javascriptToConvert, parsed.name, outputFilePath);

	return `<div id="${componentRootId}"></div><script crossorigin defer src="/${outputFilePath}"></script>`;
};

async function build(javascriptToConvert, fileName, outputFilePath) {

	const tempFilePath = `./tmp_${fileName}.jsx`;
	console.info(`Attempting to write some javascript to ${tempFilePath}`);
	await fs.writeFile(tempFilePath, javascriptToConvert);
	console.info(`Wrote some stuff to ${tempFilePath}`);

	const outputOptions = {
		file: `dist/${outputFilePath}`,
		format: "iife",
		sourcemap: false,
	};
	let bundle;
	try {
		// create a bundle
		bundle = await rollup({
			input: tempFilePath,
			output: outputOptions,
			plugins: [
				nodeResolve({
					browser: true,
					extensions: [".js"],
				}),
				replace({
					preventAssignment: true,
					'process.env.NODE_ENV': JSON.stringify('production')
				}),
				commonjs(),
				babel({
					presets: ["@babel/preset-react"],
					babelHelpers: 'bundled',

				}),
				terser(),
			]
		});

		await bundle.write(outputOptions);

		// an array of file names this bundle depends on
		// console.log(bundle.watchFiles);
		// await generateOutputs(bundle, outputOptions);
	} catch (error) {
		// do some error reporting
		console.error(error);
	}
	if (bundle) {
		// closes the bundle
		await bundle.close();
	}

	await fs.unlink(tempFilePath);
}

async function generateOutputs(bundle, outputOptions) {
	const { output } = await bundle.write(outputOptions);

	for (const chunkOrAsset of output) {
		if (chunkOrAsset.type === 'asset') {
			// For assets, this contains
			// {
			//   fileName: string,              // the asset file name
			//   source: string | Uint8Array    // the asset source
			//   type: 'asset'                  // signifies that this is an asset
			// }
			console.log('Asset', chunkOrAsset);
		} else {
			// For chunks, this contains
			// {
			//   code: string,                  // the generated JS code
			//   dynamicImports: string[],      // external modules imported dynamically by the chunk
			//   exports: string[],             // exported variable names
			//   facadeModuleId: string | null, // the id of a module that this chunk corresponds to
			//   fileName: string,              // the chunk file name
			//   implicitlyLoadedBefore: string[]; // entries that should only be loaded after this chunk
			//   imports: string[],             // external modules imported statically by the chunk
			//   importedBindings: {[imported: string]: string[]} // imported bindings per dependency
			//   isDynamicEntry: boolean,       // is this chunk a dynamic entry point
			//   isEntry: boolean,              // is this chunk a static entry point
			//   isImplicitEntry: boolean,      // should this chunk only be loaded after other chunks
			//   map: string | null,            // sourcemaps if present
			//   modules: {                     // information about the modules in this chunk
			//     [id: string]: {
			//       renderedExports: string[]; // exported variable names that were included
			//       removedExports: string[];  // exported variable names that were removed
			//       renderedLength: number;    // the length of the remaining code in this module
			//       originalLength: number;    // the original length of the code in this module
			//       code: string | null;       // remaining code in this module
			//     };
			//   },
			//   name: string                   // the name of this chunk as used in naming patterns
			//   preliminaryFileName: string    // the preliminary file name of this chunk with hash placeholders
			//   referencedFiles: string[]      // files referenced via import.meta.ROLLUP_FILE_URL_<id>
			//   type: 'chunk',                 // signifies that this is a chunk
			// }
			console.log('Chunk', chunkOrAsset.modules);
		}
	}
}

module.exports = function (eleventyConfig) {
	let idCounter = 0;

	eleventyConfig.addAsyncShortcode('react', async function (inputPath, outputPath) {
		idCounter += 1;
		return await compile(inputPath, outputPath, idCounter);
	});

	eleventyConfig.on('beforeBuild', function () {
		// reset the counter for each new build
		// otherwise, it'll count up higher and higher on every live reload
		idCounter = 0;
	});

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
			const outputPath = `${parsed.dir.replace('./src/', 'dist/')}/${parsed.name}.js`;
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
						terser(),
					]
				});

				output = await bundle.generate(outputOptions);
			} catch (error) {
				// do some error reporting
				console.error(error);
			}
			if (bundle) {
				// closes the bundle
				await bundle.close();
			}

			return async (data) => {
				return output?.output[0]?.code;
			};
		}
	});
};