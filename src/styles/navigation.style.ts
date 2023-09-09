import {Platform} from 'react-native';
import normalize from 'react-native-normalize';

import color from './color';
import themeStyle from './theme.style';

export const navigationStyle: any = {
  drawerContainer: {},
  tabBarStyle: {
    backgroundColor: color.WHITE,
    paddingHorizontal: normalize(15),
    height: Platform.OS === 'android' ? normalize(60) : normalize(80),
  },
  drawerFlatList: {
    padding: 10,
  },
  itemDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(30),
  },
  txtItemDrawer: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 20,
    marginLeft: normalize(15),
  },
  iconDrawer: {
    width: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    justifyContent: 'flex-end',
    padding: normalize(15),
    height: normalize(150),
    marginBottom: normalize(10),
  },
};
