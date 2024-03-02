import React, { ReactNode } from 'react';
import { StyleProp,  Text,  View, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { Title } from './Title';

interface Props {
    title?:string;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;

}
export const CustomView = ({ style, children ,title}: Props) => {
    return (
        <>        
        { title && <Title  safe text={title}></Title>}   
        <View style={[globalStyles.mainContainer, style]}>            
            {children}
        </View>
        </>
    )
}