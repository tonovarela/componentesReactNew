import React, { useContext, useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'

import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({ uri, style }: Props) => {
    const {colors} = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(true);
    const { animatedOpacity, fadeIn } = useAnimation()
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
                isLoading && < ActivityIndicator size={40} style={{ position: 'absolute' }} color={colors.primary}></ActivityIndicator>
            }
            <Animated.Image
                onLoadEnd={() => { fadeIn({duration:1000}); setIsLoading(false) }}
                source={{ uri }}
                style={[style, { opacity: animatedOpacity }]}
            >
            </Animated.Image>
        </View>
    )
}