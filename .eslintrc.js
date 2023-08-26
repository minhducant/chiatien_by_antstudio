module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@assets', './src/assets'],
        ['@components', './src/components'],
        ['@configs', './src/configs'],
        ['@hooks', './src/hooks'],
        ['@i18n', './src/i18n'],
        ['@screens', './src/screens'],
        ['@navigation', './src/navigation'],
        ['@stores', './src/stores'],
        ['@styles', './src/styles'],
        ['@utils', './src/utils'],
        ['@repository', './src/repository'],
      ],
    },
  },
};
