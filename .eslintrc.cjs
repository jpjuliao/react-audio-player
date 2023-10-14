module.exports = {
  env: {
    browser: true,  // This is for browser-based JavaScript
    node: true,     // This is for Node.js environments
    es6: true,      // Enable ES6 features
  },
  extends: ['eslint:recommended'],  // Use ESLint's recommended rule set
  parserOptions: {
    ecmaVersion: 2021, // Use ECMAScript 2021 features
    sourceType: 'module', // Use ES6 modules
  },
  rules: {
    // Add custom rules here:
    // Example: 'no-console': 'off' to allow console statements.
    "indent": ["error", 2]
  },
};;
