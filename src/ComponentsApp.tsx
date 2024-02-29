import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';

 const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>

  )
}

export default ComponentsApp;
