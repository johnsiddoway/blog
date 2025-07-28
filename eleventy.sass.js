import path from "node:path";
import * as sass from "sass";

const outputFileExtension = "css";

export default function sassPlugin(eleventyConfig) {
    eleventyConfig.addTemplateFormats("scss");

    eleventyConfig.addExtension("scss", {
        outputFileExtension: outputFileExtension,

        // opt-out of Eleventy Layouts
        useLayouts: false,

        compileOptions: {
            permalink: function (contents, inputPath) {
                let parsed = path.parse(inputPath);
                const output = (inputPath.includes("posts/"))
                    ? `${parsed.dir.replace("./src", "")}/${parsed.name}.${outputFileExtension}`
                    : `/${parsed.name}.${outputFileExtension}`;
                return () => {
                    return output;
                };
            },
        },

        compile: async function (inputContent, inputPath) {
            let parsed = path.parse(inputPath);
            // Don’t compile file names that start with an underscore
            if (parsed.name.startsWith("_")) {
                return;
            }

            let result = sass.compileString(inputContent, {
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
    });
};