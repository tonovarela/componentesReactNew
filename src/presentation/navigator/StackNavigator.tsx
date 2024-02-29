import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen } from '../screens/animations/Animation101Screen';


const Stack = createStackNavigator();
export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        </Stack.Navigator>
    )
}