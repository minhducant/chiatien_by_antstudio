import normalize from 'react-native-normalize';
import {StatusBar, Platform} from 'react-native';

import color from './color';
import themeStyle from './theme.style';

const statusBarHeight = StatusBar.currentHeight;

export const onboardingScreenStyle: any = {
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 0,
  },
  viewInformation: {
    flex: 1,
    padding: normalize(30),
  },
  viewAction: {
    backgroundColor: color.MAIN,
    width: normalize(200),
    padding: normalize(13),
    marginBottom: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: normalize(100),
  },
  txtAction: {
    fontSize: 20,
    fontFamily: themeStyle.FONT_FAMILY,
    color: color.WHITE,
  },
  onboardingVector: {
    marginTop: normalize(10),
    alignSelf: 'center',
    height: normalize(300),
    width: '100%',
  },
  txtIntro: {
    marginTop: normalize(20),
    fontSize: 35,
    fontFamily: themeStyle.FONT_BOLD,
  },
  txtChiti: {
    color: color.MAIN,
  },
  txtSupIntro: {
    marginTop: normalize(10),
    fontSize: 20,
    fontFamily: themeStyle.FONT_FAMILY,
    color: color.BLACK,
  },
};
