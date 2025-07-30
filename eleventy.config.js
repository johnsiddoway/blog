import { HtmlBasePlugin } from "@11ty/eleventy";
import { DateTime } from "luxon";
import markdownItAnchor from "markdown-it-anchor";
import markdownItHighlightJS from "markdown-it-highlightjs";
import jsxPlugin from "./eleventy.jsx.js";
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

    eleventyConfig.addFilter("toISODate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate();
    });

    // Copy anything in the /public/ folder over to ${outputDir}/
    eleventyConfig.addPassthroughCopy({ public: "/" });
    // Copy all .pngs to ${outputDir}/**/*.png; Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("src/**/*.png");

    // Used in src/pages/sitemap.xml.liquid to generate full URLs
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(jsxPlugin);
    eleventyConfig.addPlugin(sassPlugin);

    eleventyConfig.amendLibrary("md", mdLib => mdLib
        .use(markdownItAnchor)
        .use(markdownItHighlightJS));

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
