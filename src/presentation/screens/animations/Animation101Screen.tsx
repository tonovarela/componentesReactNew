import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../config/theme/theme';
import { useFade } from '../../hooks/useFade';

export const Animation101Screen = () => {
    const { fadeIn, fadeOut, animatedOpacity } = useFade();
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.purpleBox, { opacity: animatedOpacity }]}>
            </Animated.View>
            <Pressable onPress={() => { fadeIn(() => { console.log('termino') }) }} style={{ marginTop: 10 }} >
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => { fadeOut(() => { console.log('termino2') }) }} style={{ marginTop: 10 }} >
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