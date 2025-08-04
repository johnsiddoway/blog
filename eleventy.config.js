import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import anchor from "markdown-it-anchor";
import deflist_plugin from "markdown-it-deflist";
import highlightjs from "markdown-it-highlightjs";
import jsxPlugin from "./eleventy.jsxPlugin.js";
import sassPlugin from "./eleventy.sassPlugin.js";

export default async function (eleventyConfig) {
    // eslint-disable-next-line no-undef
    const baseUrl = process.env.BASE_HREF ?? eleventyConfig.pathPrefix ?? "/";

    // Explicity convert a relative URL to an absolute URL for sitemap.xml.
    // I prefer this to the HtmlBasePlugin from 11ty as I want to keep most URLs relative.
    eleventyConfig.addFilter("absoluteUrl", (relativeUrl) => {
        if (baseUrl === "/") {
            return relativeUrl;
        }
        return new URL(relativeUrl, baseUrl);
    });

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

    eleventyConfig.addPlugin(jsxPlugin);
    eleventyConfig.addPlugin(sassPlugin);
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

    eleventyConfig.amendLibrary("md", mdLib => mdLib
        .use(anchor)
        .use(deflist_plugin)
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
