import React, { PropsWithChildren, createContext, useEffect, useRef, useState } from "react";
import { ThemeColors, darkColors, lightColors  } from '../../config/theme/theme';
import {  AppState, Appearance } from "react-native";
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

export type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
    currentTheme: ThemeColor;
    colors: ThemeColors;
    isDark: boolean;
    setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {    
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
    const isDark = currentTheme === 'dark';    
    const colors= !isDark ? lightColors : darkColors;
    useEffect(() => {
        const subscription = AppState.addEventListener('change', (_) => {
            const colorScheme = Appearance.getColorScheme();
            setCurrentTheme(colorScheme === 'light' ? 'light' : 'dark');
        });
        return () => {
            console.log('unsubscribing');
            subscription.remove();
        };
    }, []);

    const setTheme = (theme: ThemeColor) => {
        setCurrentTheme(theme);
    }
    return (
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
            <ThemeContext.Provider
                value={{
                    isDark,
                    currentTheme,
                    colors,
                    setTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        </NavigationContainer>
    );
};
