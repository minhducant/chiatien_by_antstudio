/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {showMessage} from '@utils/index';
import {LogoChiti} from '@assets/svg/index';
import color from '@styles/color';
import themeStyle from '@styles/theme.style';

export default function LoginScreen() {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() =>
          showMessage.success(
            'Chủ tịch VFF Trần Quốc Tuấn, HLV trưởng Hoàng Anh Tuấn, các thành viên BHL và các cầu thủ đội tuyển U23 Việt Nam nâng cúp vô địch tri ân các cổ động viên đã trực tiếp tới sân tiếp lửa🔥',
          )
        }>
        <LogoChiti />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: themeStyle.FONT_BOLD,
          color: color.BLACK,
          fontSize: 45,
        }}>
        Quản lý nhóm của bạn và mọi thứ với Chithi
      </Text>
    </View>
  );
}
