import path from "node:path";
import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

export default function jsxPlugin(eleventyConfig) {
    eleventyConfig.addTemplateFormats(["js", "jsx"]);

    eleventyConfig.addExtension(["js", "jsx"], {
        outputFileExtension: "js",

        // `compile` is called once per file in the input directory
        compile: async function (inputContent, inputPath) {
            // Don't compile files outside the posts directory
            if (inputPath.indexOf("/posts/") <= 0) {
                return;
            }
            // Don’t compile file names that start with an underscore
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) {
                return;
            }

            return async () => {
                let output = await esbuild.build({
                    outdir: "dist",
                    target: "es2020",
                    entryPoints: [inputPath],
                    minify: true,
                    bundle: true,
                    write: false,
                    plugins: [sassPlugin()],
                });

                return output.outputFiles[0].text;
            };
        },
    });
};
