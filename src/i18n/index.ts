import {initReactI18next} from 'react-i18next';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';

import en from './en.json';
import vi from './vi.json';
import jp from './jp.json';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (locale: string) => void) => {
    const userLanguage = window.navigator.language || 'vi';
    cb(userLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const resources = {
  en: {translation: en},
  vi: {translation: vi},
  jp: {translation: jp},
};

const fallbackLanguage = {languageTag: 'vi'};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: fallbackLanguage.languageTag,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

export function t(path: string) {
  return i18n.t(path);
}

export function changeLanguage(alias: string) {
  i18n.changeLanguage(alias);
}
