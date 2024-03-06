import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { Animation101Screen, Animation102Screen } from '../screens/animations';
import { SwitchScreen } from '../screens/switches';
import { AlertScreen } from '../screens/alerts';
import { TextInputScreen } from '../screens/inputs';
import { CustomSectionListScreen, InfiniteScrollScreen, ModalScreen, PullToRefreshScreen, SlidesScreen } from '../screens/ui';
import { ThemeScreen } from '../screens/theme/ThemeScreen';
import { ThemeContext } from '../context/ThemeContext';




const Stack = createStackNavigator();
export const StackNavigator = () => {
    const { colors } = useContext(ThemeContext);
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.background } }} initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
            <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
            <Stack.Screen name="AlertScreen" component={AlertScreen} />
            <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
            <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
            <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
            <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
            <Stack.Screen name="ThemeScreen" component={ThemeScreen} />

        </Stack.Navigator>
    )
}