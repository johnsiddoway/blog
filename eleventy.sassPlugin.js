import path from "node:path";
import * as sass from "sass";

export default function sassPlugin(eleventyConfig) {
    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "min.css",

        compile: async function (inputContent, inputPath) {
            // Don’t compile file names that start with an underscore
            let parsed = path.parse(inputPath);
            if (parsed.name.startsWith("_")) {
                return;
            }

            let result = sass.compileString(inputContent, {
                style: "compressed",
                loadPaths: [
                    "./node_modules",
                    parsed.dir || ".",
                    this.config.dir.includes,
                ],
            });
            // Map dependencies for incremental builds
            this.addDependencies(inputPath, result.loadedUrls);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            return async (data) => {
                return result.css;
            };
        },

        compileOptions: {
            permalink: function (contents, inputPath) {
                if (inputPath.includes("/styles/")) {
                    const parsed = path.parse(inputPath);
                    return `/${parsed.name}.min.css`;
                }
                return;
            },
        },
    });
};
