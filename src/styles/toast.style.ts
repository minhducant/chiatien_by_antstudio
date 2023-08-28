import normalize from 'react-native-normalize';

import color from './color';
import themeStyle from './theme.style';

export const toastStyle: any = {
  toastContainer: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  toastBackground: {
    position: 'absolute',
  },
  toastMessageContainer: {
    position: 'absolute',
    top: normalize(30),
    width: normalize(270),
    height: normalize(100),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: normalize(40),
    left: normalize(45),
  },
  toastMessage: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 14,
    color: color.WHITE,
    paddingTop: normalize(5),
  },
  toastTitle: {
    fontFamily: themeStyle.FONT_BOLD,
    fontSize: 18,
    color: color.WHITE,
  },
  closeIcon: {
    position: 'absolute',
    top: normalize(35),
    right: normalize(5),
    zIndex: 3,
    width: normalize(50),
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
};
