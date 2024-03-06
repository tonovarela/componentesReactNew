import React, { useContext, useState } from 'react';

import { Button, CustomView, Separator } from '../../components/ui';
import { ThemeColor, ThemeContext } from '../../context/ThemeContext';
import { Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';




export const ThemeScreen = () => {


    const { setTheme,currentTheme,colors } = useContext(ThemeContext);
    const title =`Cambiar tema : ${currentTheme}` ;
    return (
        <CustomView title={title} style={{ paddingHorizontal: 20 }}>
            <Button text="light" onPress={() => { setTheme('light') }}></Button>
            <View style={{height:20}}></View>
            <Button text="dark" onPress={() => { setTheme('dark') }}></Button>

            <Text style={{color:colors.text}}>
                {JSON.stringify(colors, null, 2)}
            </Text>
        </CustomView>
    )
}