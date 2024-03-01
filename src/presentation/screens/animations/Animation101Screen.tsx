import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';


export const Animation101Screen = () => {
    const { fadeIn, fadeOut, animatedOpacity,position,startMoving} = useAnimation();
    const handleFadeIn = () => {
        fadeIn({toValue:1,duration:300},() => { startMoving({initPosition:-200,toValue:0},1000,true)})
    }
    const handleFadeOut = () => {
        startMoving({initPosition:0,toValue:-200},1000,true,()=>{ fadeOut({toValue:0,duration:300})})
    }
    
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.purpleBox, { opacity: animatedOpacity,transform:[{translateY:position}] }]}>
            </Animated.View>
            <Pressable onPress={handleFadeIn} style={{ marginTop: 10 }} >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={handleFadeOut} style={{ marginTop: 10 }} >
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150,
        borderRadius: 50,

    }

});