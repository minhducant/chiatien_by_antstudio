import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {showMessage} from '@utils/index';
import {LogoChiti} from '@assets/svg/index';
import {loginScreenStyle as styles} from '@styles/loginScreen.style';

export default function LoginScreen() {
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
    </View>
  );
}
