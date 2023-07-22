import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start,GetStarted } from '../screens';
import { useNavigationContainerRef } from '@react-navigation/native';
import { QuickStartParamsList } from 'tracki/@types/navigation';

const Stack = createStackNavigator<QuickStartParamsList>();


// @refresh reset
const QuickStartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,animationEnabled:false }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
};

export default QuickStartNavigator;
