module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'promise'],
  rules: {
    'prefer-arrow-callback': 'error',
    'no-unused-vars': 'error',
    'array-callback-return': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/self-closing-comp': 'error',
    'react/function-component-definition': [
      'error',
      {namedComponents: 'arrow-function'},
    ], // only arrow function for components
    'react/jsx-key': [
      'error',
      {checkFragmentShorthand: true, warnOnDuplicates: true},
    ],
  },
};
