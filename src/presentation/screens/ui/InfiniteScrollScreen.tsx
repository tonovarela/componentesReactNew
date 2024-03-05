import React, { useState } from 'react';

import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { FadeInImage } from '../../components/ui';


export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    const loadMore = () => {

        const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i)
        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 3000)

    }
    return (
        <View style={{ backgroundColor: 'black' }}>

            <FlatList style={{ paddingHorizontal: 10 }} data={numbers}
                onEndReached={loadMore}
                keyExtractor={(item) => item.toString()}
                onEndReachedThreshold={0.6}
                ListFooterComponent={() => (<View style={{ height: 150, justifyContent: 'center' }}>
                    <ActivityIndicator size={40} color={colors.primary}></ActivityIndicator>
                </View>)}
                renderItem={({ item }) =>
                    <ListItem number={item}></ListItem>
                }>
            </FlatList>


        </View>
    )
}

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {
    return (
        <FadeInImage style={{ height: 400, width: '100%' }}
            uri={`https://picsum.photos/id/${number}/500/400`}></FadeInImage>
        // <Image style={{ height: 400, width: '100%' }} source={{ uri: `https://picsum.photos/id/${number}/500/400` }} />
    )
}