import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const plugins = [
	replace({
		preventAssignment: true,
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	nodeResolve({
		browser: true,
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		dedupe: ['react', 'react-dom'],
	}),
	commonjs(),
	babel({
		exclude: "**/node_modules/**",
		presets: ["@babel/preset-env", "@babel/preset-react"],
		babelHelpers: 'bundled',
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	}),
	terser(),
];

export default [
	{
		input: "src/posts/2024-01-15-colors/index.jsx",
		output: {
			file: "dist/posts/2024-01-15-colors/index.js",
			format: "iife",
			sourcemap: false,
			name: 'page',
			compact: true,
		},
		plugins: plugins,
	}
];
