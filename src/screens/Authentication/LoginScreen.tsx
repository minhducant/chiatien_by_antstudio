/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {showMessage} from '../../utils/index';

export default function LoginScreen() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        onPress={() =>
          showMessage.fail(
            'Chủ tịch VFF Trần Quốc Tuấn, HLV trưởng Hoàng Anh Tuấn, các thành viên BHL và các cầu thủ đội tuyển U23 Việt Nam nâng cúp vô địch tri ân các cổ động viên đã trực tiếp tới sân tiếp lửa🔥',
          )
        }>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
