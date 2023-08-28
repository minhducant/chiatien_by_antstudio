/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {bottomTabsStyle as styles} from '../styles/bottomTabs.style';

import HomeScreen from '../screens/Application/Home/HomeScreen';
import SettingScreen from '../screens/Application/Setting/SettingScreen';
import TimelineScreen from '../screens/Application/Timeline/TimelineScreen';
import NotificationScreen from '../screens/Application/Notification/NotificationScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TimelineScreen" component={TimelineScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return <BottomTabs />;
}
