import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist/", "package.json", "package-lock.json"]),
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
        plugins: { js }, 
        extends: ["js/recommended"], 
        languageOptions: { 
            globals: {
                "jQuery": true,
                "$": true,
                ...globals.browser
            }
        }
    },
    tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        settings: {
            react: {
                version: "detect"
            }
        },
        ...pluginReact.configs.flat.recommended,
        rules: {
            "react/prop-types": ['off'],
        }
    },
    { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
    { files: ["**/*.md"], plugins: { markdown }, language: "markdown/commonmark", extends: ["markdown/recommended"] },
    { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
