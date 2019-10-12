/**
 * @ Author: Mars Santoso (marssantoso@hotmail.com)
 * @ Create Time: 2019-10-13 01:11:49
 * @ Modified by: Mars Santoso
 * @ Modified time: 2019-10-13 03:54:11
 * @ Description: .eslintrc.js
 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
