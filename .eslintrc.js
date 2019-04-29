/**
 * @link https://eslint.org/docs/user-guide/configuring#configuring-rules
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    /** @see https://eslint.org/docs/rules/ */
    'eslint:recommended',

    /** @see https://github.com/yannickcr/eslint-plugin-react#configuration */
    'plugin:react/recommended',

    // disables rules that conflict with Prettier
    'prettier',

    /**
     * @see https://github.com/jest-community/eslint-plugin-jest#recommended
     */
    'plugin:jest/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'jest',
  ],
  rules: {},
}
