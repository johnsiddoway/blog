import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const plugins = [
	nodeResolve({
		browser: true,
		extensions: [".js"],
	}),
	replace({
		preventAssignment: true,
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	babel({
		presets: ["@babel/preset-react"],
		babelHelpers: 'bundled',
	}),
	commonjs(),
	terser(),
];

export default [
	{
		input: "src/posts/2024-01-15-colors/index.js",
		output: {
			file: "dist/posts/2024-01-15-colors/index.js",
			format: "iife",
			sourcemap: false,
		},
		plugins: plugins,
	}
];
