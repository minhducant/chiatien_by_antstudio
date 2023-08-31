import {Platform} from 'react-native';
import normalize from 'react-native-normalize';

import color from './color';
import themeStyle from './theme.style';

export const navigationStyle: any = {
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: color.WHITE,
    paddingHorizontal: normalize(15),
    height: Platform.OS === 'android' ? normalize(60) : normalize(80),
  },
  drawerFlatList: {
    padding: 10,
  },
  txtItemDrawer: {
    fontFamily: themeStyle.FONT_FAMILY,
    fontSize: 20,
  },
};
