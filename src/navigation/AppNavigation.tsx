import React, {useEffect} from 'react';
import notifee from '@notifee/react-native';
import {Settings} from 'react-native-fbsdk-next';
import RNBootSplash from 'react-native-bootsplash';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FCMService from '@utils/FCMService';
import {setFirebaseToken} from '../stores/action';

//----------------------DrawerTabs-----------------------//
import DrawerTabs from '@navigation/DrawerTabs';
//--------------------Authentication---------------------//
import LoginScreen from '@screens/Authentication/LoginScreen';
import SpanishScreen from '@screens/Authentication/SpanishScreen';
import OnboardingScreen from '@screens/Authentication/OnboardingScreen';

const Stack = createStackNavigator();

const APP_STATUS = {SPANISH: 0, ONBOARDING: 1, AUTH: 2, APP: 3};

export const AppNavigation = () => {
  const dispatch = useDispatch();
  const appStatus = useSelector((state: any) => state.Config.appStatus);

  useEffect(() => {
    notifee.setBadgeCount(0);
    FCMService.registerAppWithFCM();
    FCMService.register(onRegister);
    Settings.setAdvertiserTrackingEnabled(true);
  });

  const onRegister = (token: any) => {
    if (token) {
      dispatch(setFirebaseToken({value: token}));
    }
  };

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {appStatus === APP_STATUS.SPANISH && (
          <Stack.Screen name="SpanishScreen" component={SpanishScreen} />
        )}
        {appStatus === APP_STATUS.ONBOARDING && (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        )}
        {appStatus === APP_STATUS.AUTH && (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
        {appStatus === APP_STATUS.APP && (
          <Stack.Screen name="DrawerTabs" component={DrawerTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
