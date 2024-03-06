import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import { globalStyles } from '../../../config/theme/theme';
import { Card, CustomView, Separator } from '../../components/ui';
import { ThemeContext } from '../../context/ThemeContext';




export const TextInputScreen = () => {
  const {colors}= useContext(ThemeContext);
    const [form, setform] = useState({
        name: '',
        email: '',
        phone: ''
    })
    return (
        <KeyboardAvoidingView behavior={Platform.OS ==='ios'?'padding':undefined}>
            <ScrollView >
                <CustomView title='Text inputs' >
                    <Card >
                        <TextInput  style={[globalStyles.input,{color:colors.text,backgroundColor:colors.background}]}  onChangeText={(value) => { setform({ ...form, name: value }) }} autoCapitalize={'words'} autoCorrect={false} placeholder='Nombre completo'  />
                        <TextInput  style={[globalStyles.input,{color:colors.text,backgroundColor:colors.background}]} onChangeText={(value) => { setform({ ...form, email: value }) }} autoCorrect={false} keyboardType='email-address' placeholder='email' />
                        <TextInput  style={[globalStyles.input,{color:colors.text,backgroundColor:colors.background}]} onChangeText={(value) => { setform({ ...form, phone: value }) }} autoCorrect={false} keyboardType='phone-pad' placeholder='phone'  />
                    </Card>


                    <Separator />
                    <Card>
                        <Text style={{color:colors.text}}>{JSON.stringify(form, null, 2)}</Text>
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
                    <TextInput  style={[globalStyles.input,{color:colors.text,backgroundColor:colors.background}]} onChangeText={(value) => { setform({ ...form, phone: value }) }} autoCorrect={false} keyboardType='phone-pad' placeholder='phone'  />

                </CustomView>
                <Separator/>
                
            </ScrollView>
        </KeyboardAvoidingView>

    )
}