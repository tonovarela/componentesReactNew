import React, { useContext } from 'react';
import { Text } from 'react-native'
import { globalStyles, colors } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {

    text: string;
    safe?: boolean;    

}

export const SubTitle = ({ text, safe=false}: Props) => {

    const {colors} = useContext(ThemeContext);

    const {top} = useSafeAreaInsets();
    return (
        
            <Text style={{...globalStyles.subTitle,marginTop:safe?top:0,marginBottom:10,backgroundColor:colors.background,color:colors.text}}>{text}</Text>
        
    )
}