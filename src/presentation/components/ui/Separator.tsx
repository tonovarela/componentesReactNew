import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>
}

export const Separator = ({ style }: Props) => {
    return (
        <View style={{backgroundColor:colors.cardBackground}}>
            <View style={[{ alignSelf: 'center', width: "100%", height: 1, opacity: 0.2, marginVertical: 8, backgroundColor: colors.text }, style]}>
            </View>
        </View>

    )
}