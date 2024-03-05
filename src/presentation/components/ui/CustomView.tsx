import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { Title } from './Title';

interface Props {
    title?: string;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean

}
export const CustomView = ({ style, children, title, margin = false }: Props) => {
    return (
        <View style={[globalStyles.mainContainer, margin ? globalStyles.globalMargin : null, style]}>
            {title && <Title text={title}></Title>}
            {children}
        </View>

    )
}