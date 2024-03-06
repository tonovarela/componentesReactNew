import React, { useContext } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'

import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { Button,  Title } from '../../components/ui';


export const Animation101Screen = () => {
    const { colors } = useContext(ThemeContext);
    const { fadeIn, fadeOut, animatedOpacity, position, startMoving } = useAnimation();
    const handleFadeIn = () => {
        fadeIn({ toValue: 1, duration: 300 }, () => { startMoving({ initPosition: -500, toValue: 0 }, 1000, true) })
    }
    const handleFadeOut = () => {
        startMoving({ initPosition: 0, toValue: -500 }, 1000, true, () => { fadeOut({ toValue: 0, duration: 300 }) })
    }
    console.log(colors)
    return (
        <>        
        <View style={[styles.container,{backgroundColor:colors.background}]} >
            <Title text={'Animation1'}></Title>
            <View style={{flex:1}}></View>
                <Animated.View style={[{ ...styles.purpleBox,backgroundColor:colors.primary }, { opacity: animatedOpacity, transform: [{ translateY: position }] }]}>
                </Animated.View>
                <View>
                    <Button text='FadeIn' onPress={handleFadeIn} styles={{ marginTop: 10 }} ></Button>
                    <Button text='FadeIn' onPress={handleFadeOut} styles={{ marginTop: 10 }} ></Button>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    purpleBox: {
        //backgroundColor: 'red',
        width: 150,
        height: 150,
        borderRadius: 50,

    }

});