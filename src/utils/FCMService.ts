import {Platform} from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const register = (onRegister: any) => {
  checkPermission(onRegister);
};

const onListenNotification = (
  onNotification: any,
  onOpenNotification: Function,
) => {
  createNotificationListeners(onNotification, onOpenNotification);
};

const registerAppWithFCM = async () => {
  await messaging().registerDeviceForRemoteMessages();
  if (Platform.OS === 'ios') {
    await messaging().setAutoInitEnabled(true);
  }
};

const checkPermission = async (onRegister: any) => {
  messaging()
    .hasPermission()
    .then(enabled => {
      if (enabled) {
        getToken(onRegister);
      } else {
        requestPermission(onRegister);
      }
    })
    .catch(error => {
      console.log('[FCMService] Permission rejected ', error);
    });
};

const getToken = (onRegister: any) => {
  messaging()
    .getToken()
    .then(fcmToken => {
      if (fcmToken) {
        onRegister(fcmToken);
      } else {
        console.log('[FCM Service] User does not have device token');
      }
    })
    .catch(error => {
      console.log('[FCM Service] Get token rejected ', error);
    });
};

const requestPermission = (onRegister: any) => {
  messaging()
    .requestPermission()
    .then(() => {
      getToken(onRegister);
    })
    .catch(error => {
      console.log('[FCM Service] Request Permission rejected ', error);
    });
};

const deleteToken = () => {
  console.log('[FCMService] DSeleteToken');
  messaging()
    .deleteToken()
    .catch(error => {
      console.log('[FCM Service] Delete token error ', error);
    });
};

const createNotificationListeners = (
  onNotification: any,
  onOpenNotification: Function,
) => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('[FCM Service] onNotificationApp caused app to open');
    if (remoteMessage) {
      console.log('Remote message background + ', remoteMessage);
      onOpenNotification(remoteMessage);
      notifee.incrementBadgeCount();
    }
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      console.log(
        '[FCM Service] GetInitialNotification Notification caused app to open',
      );
      if (remoteMessage) {
        console.log('Remote message quit state + ', remoteMessage);
        onOpenNotification(remoteMessage);
      }
    });
  messaging().onMessage(async remoteMessage => {
    console.log('[FCM Service] A new FCM message arrived! ', remoteMessage);
    if (remoteMessage) {
      onNotification(remoteMessage);
      notifee.incrementBadgeCount();
    }
  });
};

export default {
  register,
  getToken,
  deleteToken,
  checkPermission,
  requestPermission,
  registerAppWithFCM,
  onListenNotification,
};
