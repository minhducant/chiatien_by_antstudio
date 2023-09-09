import normalize from 'react-native-normalize';
import {Dimensions, StatusBar, Platform} from 'react-native';

import color from '@styles/color';
import themeStyle from '@styles/theme.style';

const {width} = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight;

export const homeScreenStyle: any = {
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
};
