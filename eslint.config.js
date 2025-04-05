// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const perfectionist = require("eslint-plugin-perfectionist");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      eslintPluginPrettierRecommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      perfectionist,
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "weatherly",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "weatherly",
          style: "kebab-case",
        },
      ],
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      eslintPluginPrettierRecommended,
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
