import path from "node:path";
import esbuild from "esbuild";

export default function jsxPlugin(eleventyConfig) {
    eleventyConfig.addTemplateFormats(["js", "jsx"]);

    eleventyConfig.addExtension(["js", "jsx"], {
        outputFileExtension: "js",

        compile: async function (inputContent, inputPath) {
            // Don’t compile file names that start with an underscore
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) {
                return;
            }

            return async () => {
                let output = await esbuild.build({
                    target: "es2020",
                    entryPoints: [inputPath],
                    minify: true,
                    bundle: true,
                    write: false,
                });

                return output.outputFiles[0].text;
            };
        },
    });
};
