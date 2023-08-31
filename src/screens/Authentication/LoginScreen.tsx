import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TouchableOpacity} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {showMessage} from '@utils/index';
import {setAppStatus, setIsLoading} from '@stores/action';
import {loginScreenStyle as styles} from '@styles/loginScreen.style';
import {LogoChiti, IconGoogle, IconFacebook} from '@assets/svg/index';

export default function LoginScreen() {
  const dispatch = useDispatch();

  const onLoginFacebook = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      return;
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      return;
    }
    console.log(JSON.stringify(data, null, 2));
    dispatch(setIsLoading(true));
    dispatch(setIsLoading(false));
    dispatch(setAppStatus(3));
  };

  const onLoginGoogle = async () => {
    GoogleSignin.configure({
      webClientId:
        '966863467456-e1pmm7s48jaigispq3dsma4lug45vsi3.apps.googleusercontent.com',
      offlineAccess: true,
    });
    GoogleSignin.hasPlayServices();
    try {
      const data = await GoogleSignin.signIn();
      if (!data) {
        showMessage.fail('Không thể lấy thông tin truy cập của Google');
        return;
      }
      dispatch(setIsLoading(true));
      dispatch(setIsLoading(false));
      dispatch(setAppStatus(3));
      console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      if (__DEV__) {
        console.log('[App] Google Login: ', error);
      }
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logo}
        onPress={() =>
          showMessage.success(
            'Chủ tịch VFF Trần Quốc Tuấn, HLV trưởng Hoàng Anh Tuấn, các thành viên BHL và các cầu thủ đội tuyển U23 Việt Nam nâng cúp vô địch tri ân các cổ động viên đã trực tiếp tới sân tiếp lửa🔥',
          )
        }>
        <LogoChiti />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLoginGoogle}>
        <IconGoogle />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLoginFacebook}>
        <IconFacebook />
      </TouchableOpacity>
    </View>
  );
}
