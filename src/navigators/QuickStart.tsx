import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from '../screens';

const Stack = createStackNavigator();

// @refresh reset
const QuickStartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  );
};

export default QuickStartNavigator;
