import React, { ReactNode, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { Title } from './Title';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    title?: string;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean

}
export const CustomView = ({ style, children, title, margin = false }: Props) => {
    const  {colors}  =useContext(ThemeContext)
    return (
        <View style={[globalStyles.mainContainer, margin ? globalStyles.globalMargin : null, {backgroundColor:colors.background},style]}>
            {title && <Title text={title}></Title>}
            {children}
        </View>

    )
}