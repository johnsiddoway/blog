// @ts-check
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint';

export default tseslint.config({
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
    ],
    ignores: ["dist/**"],
    languageOptions: {
        globals: {
            "console": true,
            "document": true,
            "jQuery": true,
            "$": true,
        }
    },
    linterOptions: {
        reportUnusedDisableDirectives: 'warn',
    },
    plugins: {
        '@stylistic': stylistic,
    },
    rules: {
        '@stylistic/indent': ['warn', 4],
        "@typescript-eslint/prefer-for-of": "warn",
        "no-undef": "warn",
    }
});