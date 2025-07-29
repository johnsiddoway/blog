// @ts-check

import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

// https://typescript-eslint.io/getting-started
export default tseslint.config(
    globalIgnores(["dist/"]),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    // https://eslint.style/guide/config-presets
    // https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        semi: true,
    }),
);
