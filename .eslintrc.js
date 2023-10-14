module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types validation
    // Add more rules and configurations as needed
  },
};