/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Animated} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  IconSim,
  IconHome,
  IconQrCode,
  IconSettings,
  IconNotification,
} from '@assets/svg/index';
import color from '@styles/color';
import {bottomTabsStyle as styles} from '@styles/bottomTabs.style';

import HomeScreen from '@screens/Application/Home/HomeScreen';
import QrCodeScreen from '@screens/Application/QrCode/QrCodeScreen';
import SettingScreen from '@screens/Application/Setting/SettingScreen';
import TimelineScreen from '@screens/Application/Timeline/TimelineScreen';
import NotificationScreen from '@screens/Application/Notification/NotificationScreen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconHome fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="TimelineScreen"
        component={TimelineScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconSim fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="QrCodeScreen"
        component={QrCodeScreen}
        options={{
          tabBarIcon: ({}) => <IconQrCode />,
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconNotification fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconSettings fill={focused ? color.MAIN : color.GRAYCHATEAU} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <BottomTabs />;
}
