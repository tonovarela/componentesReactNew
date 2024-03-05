import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import { globalStyles } from '../../../config/theme/theme';
import { Card, CustomView, Separator } from '../../components/ui';




export const TextInputScreen = () => {

    const [form, setform] = useState({
        name: '',
        email: '',
        phone: ''
    })
    return (
        <KeyboardAvoidingView behavior={Platform.OS ==='ios'?'padding':undefined}>
            <ScrollView>
                <CustomView title='Text inputs'>
                    <Card>
                        <TextInput onChangeText={(value) => { setform({ ...form, name: value }) }} autoCapitalize={'words'} autoCorrect={false} placeholder='Nombre completo' style={globalStyles.input} />
                        <TextInput onChangeText={(value) => { setform({ ...form, email: value }) }} autoCorrect={false} keyboardType='email-address' placeholder='email' style={globalStyles.input} />
                        <TextInput onChangeText={(value) => { setform({ ...form, phone: value }) }} autoCorrect={false} keyboardType='phone-pad' placeholder='phone' style={globalStyles.input} />
                    </Card>


                    <Separator />
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <Card>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <TextInput onChangeText={(value) => { setform({ ...form, phone: value }) }} autoCorrect={false} keyboardType='phone-pad' placeholder='phone' style={globalStyles.input} />

                </CustomView>
                <Separator/>
                
            </ScrollView>
        </KeyboardAvoidingView>

    )
}