import React from 'react';
import {View, Text} from 'react-native';

import {AsyncApp} from '@utils/index';
import {homeScreenStyle as styles} from '@styles/homeScreen.style';

export default function HomeScreen() {
  AsyncApp();
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
}
