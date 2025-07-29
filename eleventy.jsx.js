import console from "node:console";
import path from "node:path";
import { rollup } from "rollup";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";

export default function jsxPlugin(eleventyConfig) {
    eleventyConfig.addTemplateFormats(["js", "jsx"]);

    eleventyConfig.addExtension(["js", "jsx"], {
        outputFileExtension: "js",

        // `compile` is called once per file in the input directory
        compile: async function (inputContent, inputPath) {
            if (inputPath.indexOf("/posts/") < 0) {
                return;
            }

            let bundle = null;
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) {
                return;
            }
            const outputPath = `${parsed.dir.replace("./src/", "dist/")}/index.js`;
            console.info(`${inputPath} -> ${outputPath}`);
            const outputOptions = {
                file: outputPath,
                format: "iife",
                sourcemap: false,
                name: "page",
            };
            try {
                // create a bundle
                bundle = await rollup({
                    input: inputPath,
                    // output: outputOptions,
                    onwarn(warning, warn) {
                        if (
                            warning.code === "MODULE_LEVEL_DIRECTIVE"
                            && warning.message.includes(`"use client"`)
                        ) {
                            return;
                        }
                        warn(warning);
                    },
                    plugins: [
                        replace({
                            "preventAssignment": true,
                            "process.env.NODE_ENV": JSON.stringify("production"),
                        }),
                        nodeResolve({
                            browser: true,
                            extensions: [".js", ".jsx", ".ts", ".tsx"],
                            dedupe: ["react", "react-dom"],
                        }),
                        commonjs(),
                        babel({
                            exclude: "**/node_modules/**",
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            babelHelpers: "bundled",
                            extensions: [".js", ".jsx", ".ts", ".tsx"],
                        }),
                        scss({ fileName: `index.css` }),
                        terser(),
                    ],
                });

                const { output } = await bundle.write(outputOptions);
                const dependencies = output
                    .filter(chunkOrAsset => chunkOrAsset.type === "chunk")
                    .flatMap(chunkOrAsset => chunkOrAsset.modules)
                    .map(module => Object.keys(module));
                this.addDependencies(inputPath, dependencies);
            }
            catch (error) {
                // do some error reporting
                console.error(error);
            }
            if (bundle) {
                // closes the bundle
                await bundle.close();
            }

            return;
        },
    });
};
