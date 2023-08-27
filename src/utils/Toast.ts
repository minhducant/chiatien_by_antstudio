import {DeviceEventEmitter} from 'react-native';

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

export {showMessage};
