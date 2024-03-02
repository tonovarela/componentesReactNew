import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import { Text } from 'react-native';
import { Separator } from '../../components/ui/Separator';


export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });


    return (
        <CustomView  title='Switches' style={{ marginTop: 10, paddingHorizontal: 20 }}>
            <Card>
                <CustomSwitch isOn={state.isActive} text='Esta activo' onChange={(value) => { setState({ ...state, isActive: value }) }} />
                <Separator />
                <CustomSwitch isOn={state.isHungry} text='Tiene hambre' onChange={(value) => { setState({ ...state, isHungry: value }) }} />
                <Separator />
                <CustomSwitch isOn={state.isHappy} text='Es feliz' onChange={(value) => { setState({ ...state, isHappy: value }) }} />
                <Separator />


                {/* <Text>{JSON.stringify(state, null, 2)}</Text> */}

            </Card>

        </CustomView>
    )
}