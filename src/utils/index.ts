import {
  setStorage,
  getStorage,
  multiRemove,
  getLanguage,
  getAccessToken,
} from './Storage';
import {showMessage} from './Toast';
import {LogTelegram} from './LogTelegram';
import {formatYen, formatVietnamDong, formatDollar} from './FormatMoney';

export {
  getAccessToken,
  getLanguage,
  formatYen,
  LogTelegram,
  formatVietnamDong,
  formatDollar,
  showMessage,
  setStorage,
  getStorage,
  multiRemove,
};
