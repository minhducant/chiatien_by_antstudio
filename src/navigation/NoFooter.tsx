import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

/*-----------------------------   Calculator    ------------------------------- */
import CalculatorScreen from '@screens/Application/Calculator/CalculatorScreen';

function NoFooter() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
    </Stack.Navigator>
  );
}

export default function NoFooterStack() {
  return <NoFooter />;
}
