import { HtmlBasePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import anchor from "markdown-it-anchor";
import highlightjs from "markdown-it-highlightjs";
import jsxPlugin from "./eleventy.jsxPlugin.js";
import sassPlugin from "./eleventy.sassPlugin.js";

export default async function (eleventyConfig) {
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
    eleventyConfig.addPassthroughCopy({ "public": "/" });
    // Copy all .pngs to ${outputDir}/**/*.png; Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("src/**/*.png");

    // Used in src/pages/sitemap.xml.liquid to generate full URLs
    eleventyConfig.addPlugin(HtmlBasePlugin, {
        baseHref: process.env.BASE_HREF ?? eleventyConfig.pathPrefix,
    });
    eleventyConfig.addPlugin(jsxPlugin);
    eleventyConfig.addPlugin(sassPlugin);
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    eleventyConfig.amendLibrary("md", mdLib => mdLib
        .use(anchor)
        .use(highlightjs));

    // https://liquidjs.com/tutorials/options.html#Date, set the timezone to UTC when reading dates out of front matter
    eleventyConfig.setLiquidOptions({
        timezoneOffset: 0 
    });

    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};