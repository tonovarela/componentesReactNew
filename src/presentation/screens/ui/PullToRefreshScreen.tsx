import React, { useState } from 'react';
import {  Title } from '../../components/ui';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../../config/theme/theme';




export const PullToRefreshScreen = () => {
    const { top } = useSafeAreaInsets();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const RefreshControlContainer = () => {
        return (
            <RefreshControl progressViewOffset={top} colors={[colors.primary, 'red', 'orange', 'green']} refreshing={isRefreshing} onRefresh={onRefresh}></RefreshControl>
        )
    }
    const onRefresh = () => {
        setIsRefreshing(true)
        console.log('onRefresh')
        setTimeout(() => {
            setIsRefreshing(false)
        }, 5000)
    };
    return (
        <ScrollView style={[globalStyles.mainContainer, globalStyles.globalMargin]}
            refreshControl={RefreshControlContainer()} >
            <Title text='Pull to refresh'></Title>
        </ScrollView>

    )
}