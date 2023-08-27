/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {showMessage} from '../../utils/index';

export default function LoginScreen() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => showMessage.success('Anh yêu Em')}>
        <Text>LoginScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
