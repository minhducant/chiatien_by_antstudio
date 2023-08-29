import normalize from 'react-native-normalize';

import color from './color';
import themeStyle from './theme.style';

export const onboardingScreenStyle: any = {
  container: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  viewInformation: {
    flex: 1,
    backgroundColor: color.WHITE,
    padding: normalize(10),
  },
};
