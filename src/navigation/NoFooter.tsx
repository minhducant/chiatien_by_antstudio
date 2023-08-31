import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

/*-----------------------------   Calculator    ------------------------------- */
import CalculatorScreen from '@screens/Application/Calculator/CalculatorScreen';
/*-----------------------------   Calculator    ------------------------------- */
import AboutChitiScreen from '@screens/Application/Drawer/AboutChitiScreen';

function NoFooter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
      <Stack.Screen name="AboutChitiScreen" component={AboutChitiScreen} />
    </Stack.Navigator>
  );
}

export default function NoFooterStack() {
  return <NoFooter />;
}
