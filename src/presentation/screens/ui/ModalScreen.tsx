import React, { useState } from 'react';
import { Button, CustomView, Separator, Title } from '../../components/ui';
import { Modal, Platform, Text, View } from 'react-native';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <CustomView title='ModalScreen'>
            <Button onPress={
                () => { setIsVisible(true) }
            } text={'Abrir Modal'}></Button>

            <Modal visible={isVisible} animationType='slide'>
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
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