// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const eslintConfigPrettier = require("eslint-config-prettier/flat");

module.exports = defineConfig([
  // Ignore files
  {
    ignores: ["projects/**/*", "**/*.js", "dist/**"]
  },

  // Typescript
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
      eslintConfigPrettier
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "no-console": "error",
      curly: "error",
      "@typescript-eslint/no-explicit-any": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ]
    }
  },

  // HTML
  {
    files: ["**/*.html"],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility, eslintConfigPrettier],
    rules: {}
  }
]);
