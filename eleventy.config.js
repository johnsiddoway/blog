import sassPlugin from "./eleventy.sass.js";

export default async function (eleventyConfig) {
    // Configure Eleventy

    // Copy anything in the /public/ folder over to ${outputDir}/
    eleventyConfig.addPassthroughCopy({ public: "/" });
    // Copy all .pngs to ${outputDir}/**/*.png; Keeps the same directory structure.
    eleventyConfig.addPassthroughCopy("src/**/*.png");

    eleventyConfig.addPlugin(sassPlugin);

    return {
        dir: {
            input: "src",
            output: "dist",
        },
    };
};
