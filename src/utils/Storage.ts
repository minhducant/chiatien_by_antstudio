import {isString} from 'underscore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type keyStore = string;

const getAccessToken = async () => {
  try {
    const data: any = await AsyncStorage.getItem('persist:root');
    const jsonObject = JSON.parse(data);
    const accessToken = JSON.parse(jsonObject.Authentication).accessToken;
    return accessToken;
  } catch (error) {
    console.log('Error retrieving AccessToken:', error);
    return '';
  }
};

const getLanguage = async () => {
  try {
    const data: any = await AsyncStorage.getItem('persist:root');
    const jsonObject = JSON.parse(data);
    const language = JSON.parse(jsonObject.Config).language;
    return language;
  } catch (error) {
    console.log('Error retrieving Language', error);
    return '';
  }
};

const setStorage = (key: keyStore, value: any) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

const getStorage = async (key: keyStore) => {
  let data = await AsyncStorage.getItem(key);
  if (isString(data)) {
    return JSON.parse(data);
  }
  return null;
};

const multiRemove = async (list: keyStore[]) => {
  return AsyncStorage.multiRemove(list);
};

export {getAccessToken, getLanguage, setStorage, getStorage, multiRemove};
