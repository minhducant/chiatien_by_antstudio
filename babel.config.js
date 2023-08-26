module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
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
          '@styles': './src/styles',
          '@stores': './src/stores',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@configs': './src/configs',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@repository': './src/repository',
        },
      },
    ],
  ],
};
