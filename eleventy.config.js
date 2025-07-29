import highlightjs from "markdown-it-highlightjs";
import sassPlugin from "./eleventy.sass.js";

export default async function (eleventyConfig) {
    // Configure Eleventy
    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    // Copy anything in the /public/ folder over to ${outputDir}/
    eleventyConfig.addPassthroughCopy({ public: "/" });
    // Copy all .pngs to ${outputDir}/**/*.png; Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("src/**/*.png");

    eleventyConfig.addPlugin(sassPlugin);

    eleventyConfig.amendLibrary("md", mdLib => mdLib
        .use(highlightjs));

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
