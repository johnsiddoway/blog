import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
	input: "src/components/index.js",
	output: {
		file: "dist/components/test.js",
		format: "iife",
		sourcemap: true,
	},
	plugins: [
		nodeResolve({
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
	]
};
