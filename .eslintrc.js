module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'no-console': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/self-closing-comp': 0,
    'jsx-a11y/heading-has-content': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'react/jsx-no-useless-fragment': 0,
  },
};
