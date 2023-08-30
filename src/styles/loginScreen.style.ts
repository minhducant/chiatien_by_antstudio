import normalize from 'react-native-normalize';
import {StatusBar, Platform} from 'react-native';

import color from './color';
import themeStyle from './theme.style';

const statusBarHeight = StatusBar.currentHeight;

export const loginScreenStyle: any = {
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
  logo: {alignSelf: 'center'},
};
