import React, { PropsWithChildren } from 'react'
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';


const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

const ComponentsApp = () => {
  return (
    <AppTheme>
      <StackNavigator />
    </AppTheme>
  )
}

export default ComponentsApp;
