import React from 'react';
import normalize from 'react-native-normalize';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import themeStyle from '@styles/theme.style';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//-----------------------NoFooter------------------------//
import NoFooter from '@navigation/NoFooter';
//----------------------BottomTabs-----------------------/
import BottomTabs from '@navigation/BottomTabs';
//-------------------------Drawer-------------------------//
import AboutUsScreen from '@screens/Application/AboutUs/AboutUsScreen';

const BottomTabsNavigator = () => (
  <Stack.Navigator
    initialRouteName="BottomTabs"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    <Stack.Screen name="NoFooter" component={NoFooter} />
  </Stack.Navigator>
);

function DrawerTabs() {
  return (
    <Drawer.Navigator
      //   drawerContent={(content: any) => <CustomDrawer {...content} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#ddf2dc',
        drawerActiveTintColor: '#259121',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          //   marginLeft: normalize(-20),
          fontFamily: themeStyle.FONT_FAMILY,
          fontSize: 14,
        },
        drawerItemStyle: {marginLeft: normalize(10)},
      }}>
      <Drawer.Screen
        name="BottomTabsNavigator"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <DrawerTabs />;
}
