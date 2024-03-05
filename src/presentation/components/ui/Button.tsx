import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';

interface Props {
    text: string;
    styles?: StyleProp<ViewStyle>;
    onPress: () => void;
}

export const Button = ({ text, styles, onPress }: Props) => {
    return (
        <Pressable style={({ pressed }) => ([globalStyles.btnPrimary,styles,{ opacity: pressed ? 0.8 : 1, backgroundColor: colors.primary }])} onPress={onPress}>
            <Text style={[globalStyles.btnPrimaryText, { color: colors.buttonTextColor }]}>{text}</Text>
        </Pressable>


    )
}