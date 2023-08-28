/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import notifee from '@notifee/react-native';
import {Settings} from 'react-native-fbsdk-next';
import RNBootSplash from 'react-native-bootsplash';
// import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import FCMService from '@utils/FCMService';
// import {setFirebaseToken} from '../stores/action';

//-----------------------NoFooter------------------------//
// import NoFooter from '@navigation/NoFooter';
//----------------------BottomTabs-----------------------/
import BottomTabs from './BottomTabs';
//--------------------Authentication---------------------//
import LoginScreen from '../screens/Authentication/LoginScreen';
import SpanishScreen from '../screens/Authentication/SpanishScreen';
import RegisterScreen from '../screens/Authentication/RegisterScreen';
import ForgetPassScreen from '../screens/Authentication/ForgetPassScreen';
import VerifyMailScreen from '../screens/Authentication/VerifyMailScreen';
import VerifyCodeScreen from '../screens/Authentication/VerifyCodeScreen';
import OnboardingScreen from '../screens/Authentication/OnboardingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const APP_STATUS = {SPANISH: 0, ONBOARDING: 1, AUTH: 2, APP: 3};

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="VerifyMailScreen" component={VerifyMailScreen} />
    <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
    <Stack.Screen name="ForgetPassScreen" component={ForgetPassScreen} />
  </Stack.Navigator>
);

// const BottomTabsNavigator = () => (
//   <Stack.Navigator
//     initialRouteName="BottomTabs"
//     screenOptions={{headerShown: false}}>
//     <Stack.Screen name="BottomTabs" component={BottomTabs} />
//     <Stack.Screen name="NoFooter" component={NoFooter} />
//   </Stack.Navigator>
// );

export const AppNavigation = () => {
  // const dispatch = useDispatch();
  // const appStatus = useSelector((state: any) => state.Config.appStatus);

  useEffect(() => {
    notifee.setBadgeCount(0);
    // FCMService.registerAppWithFCM();
    // FCMService.register(onRegister);
    Settings.setAdvertiserTrackingEnabled(true);
  });

  // const onRegister = (token: any) => {
  //   if (token) {
  //     dispatch(setFirebaseToken({value: token}));
  //   }
  // };

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      {/* <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{headerShown: false}}>
        {appStatus === APP_STATUS.SPANISH && (
          <Stack.Screen name="SpanishScreen" component={SpanishScreen} />
        )}
        {appStatus === APP_STATUS.ONBOARDING && (
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        )}
        {appStatus === APP_STATUS.AUTH && (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
        {appStatus === APP_STATUS.APP && (
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        )}
      </Stack.Navigator> */}

      {/* <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator> */}

      <Drawer.Navigator>
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
