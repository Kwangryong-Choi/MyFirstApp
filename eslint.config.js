// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintConfigPrettier = require('eslint-config-prettier/flat');

module.exports = defineConfig([
  expoConfig,
  eslintConfigPrettier,
  {
    ignores: ['dist/*', '.expo/*'],
  },
  {
    files: ['src/hooks/use-color-scheme.web.ts'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);
