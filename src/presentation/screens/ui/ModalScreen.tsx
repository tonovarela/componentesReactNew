import React, { useContext, useState } from 'react';
import { Button, CustomView, Separator, Title } from '../../components/ui';
import { Modal, Platform, Text, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(true)
    const { colors } = useContext(ThemeContext);
    return (

        <CustomView title='ModalScreen'>
            <Button onPress={
                () => { setIsVisible(true) }
            } text={'Abrir Modal'}></Button>

            <Modal visible={isVisible} animationType='slide' >
                <View style={{ flex: 1, backgroundColor: colors.background }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title safe text={'Modal Content'}></Title>
                    </View>
                    <View style={{ flex: 1 }}></View>

                    <Button styles={{ height: Platform.OS === 'android' ? 40 : 60, borderRadius:0 }}
                        onPress={() => { setIsVisible(false) }} text={'Cerrar'}></Button>


                </View>
            </Modal>



        </CustomView>
    )
}