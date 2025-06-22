import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    // Node.js global variables
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node }
  },
  {
    // Jest test files
    files: ["**/test/**/*.js", "**/*.test.js", "**/*.spec.js"],
    languageOptions: { globals: globals.jest }
  }
]);
