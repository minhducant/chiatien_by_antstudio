module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@i18n': './src/i18n',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@stores': './src/stores',
          '@styles': './src/styles',
          '@configs': './src/configs',
          '@screens': './src/screens',
          '@repository': './src/repository',
          '@navigation': './src/navigation',
          '@components': './src/components',
        },
      },
    ],
  ],
};
