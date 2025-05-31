// eslint.config.js
import js from "@eslint/js";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  pluginPrettierRecommended,
  {
    files: ["eslint.config.js", "prettierrc.cjs"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        process: "readonly",
      },
    },
  },
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
      },
    },
    rules: {
      // "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }] // 例: 未使用変数を警告に
    },
  },
];
