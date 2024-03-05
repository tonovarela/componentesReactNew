import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import { Separator } from '../../components/ui/Separator';

import { promtAdapter, promtAsIOS } from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },

        ], { cancelable: true, onDismiss: () => { console.log("onDismiss") } });


    const onShowPrompt = () => {

        // promtAsIOS({
        //     title: 'Prompt Title',
        //     message: 'Prompt Message',
        //     placeholder: 'Prompt Placeholder',
        //     cancelable: true,
        //     onCancel: () => {
        //         console.log('onCancel');
        //     },
        //     onConfirm: (text) => {
        //         console.log('onConfirm', text);
        //     },
        //     textCancel: 'Cancel',
        //     textConfirm: 'OK',
        //     type: 'default'
        // })

        promtAdapter({
            title: 'Prompt Title',
            message: 'Prompt Message',
            placeholder: 'Prompt Placeholder',
            cancelable: true,
            onCancel: () => {
                console.log('onCancel');
            },
            onConfirm: (text) => {
                console.log('onConfirm', text);
            },
            textCancel: 'Cancel',
            textConfirm: 'OK',
            type: 'default'

        });

    }
    return (
        <CustomView style={globalStyles.globalMargin}>
            <Title text='Alertas' safe></Title>
            <Button text="Alerta 2 botones" onPress={createTwoButtonAlert}></Button>
            <Separator></Separator>
            <Button text="Alerta 3 botones" onPress={createThreeButtonAlert}></Button>
            <Separator></Separator>
            <Button text="Prompt" onPress={onShowPrompt}></Button>

        </CustomView >
    )
}