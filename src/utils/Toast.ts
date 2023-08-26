import Snackbar from 'react-native-snackbar';
import normalize from 'react-native-normalize';
import {Platform, DeviceEventEmitter} from 'react-native';

import color from '@styles/color';
import themeStyle from '@styles/theme.style';

interface showToastProps {
  message: any;
  titleAction?: string;
  onPress?: () => void;
}

function showToast({
  message = '',
  titleAction = '',
  onPress = () => {},
}: showToastProps) {
  Snackbar.show({
    text: message,
    numberOfLines: 3,
    marginBottom: Platform.OS === 'ios' ? normalize(60) : normalize(30),
    backgroundColor: '#999999F1',
    fontFamily: themeStyle.FONT_FAMILY,
    duration: Snackbar.LENGTH_SHORT,
    action: {
      text: titleAction,
      textColor: color.MAIN,
      onPress: () => {
        onPress;
      },
    },
  });
}

const showMessage = {
  success: (message: string) => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'success',
    });
  },
  fail: (message: string) => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'fail',
    });
  },
  warning: (message: string) => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'warning',
    });
  },
  help: (message: string) => {
    DeviceEventEmitter.emit('SHOW_TOAST_MESSAGE', {
      message: message,
      type: 'help',
    });
  },
  hide: () => {
    DeviceEventEmitter.emit('HIDE_TOAST_MESSAGE');
  },
};

export {showToast, showMessage};
