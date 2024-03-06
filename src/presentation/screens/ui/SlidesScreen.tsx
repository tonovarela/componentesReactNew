import React, { useContext, useRef, useState } from 'react';
import { Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, View, useWindowDimensions } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/ui';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}
export const SlidesScreen = () => {
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const slides: Slide[] = [
        {
            title: 'Slide 1',
            desc: 'Slide 1 Description',
            img: require('../../assets/slide-1.png')
        },
        {
            title: 'Slide 2',
            desc: 'Slide 2 Description',
            img: require('../../assets/slide-2.png')
        },
        {
            title: 'Slide 3',
            desc: 'Slide 3 Description',
            img: require('../../assets/slide-3.png')
        }
    ];

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    }

    const scrollToSlide = (index: number) => {
        if (!flatListRef.current) return;
        flatListRef.current.scrollToIndex({ animated: true, index });
    }


    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                decelerationRate={'fast'}
                renderItem={({ item }) => <SlideItem item={item}></SlideItem>}
                data={slides}
                onScroll={onScroll}
                keyExtractor={(item) => item.title}
            ></FlatList>

            {
                currentSlideIndex == slides.length - 1 ?
                    <Button styles={{ width: 100, position: 'absolute', bottom: 60, right: 60 }} onPress={() => { navigation.goBack() }} text='Finalizar'></Button>
                    : <Button styles={{ width: 100, position: 'absolute', bottom: 60, right: 60 }} onPress={() => { scrollToSlide(currentSlideIndex + 1) }} text='Siguiente'></Button>
            }

        </View>
    )
}

interface SlideItemProps {
    item: Slide

}
const SlideItem = ({ item }: SlideItemProps) => {
    const { width } = useWindowDimensions()
    const { title, desc, img } = item;
    const { colors } = useContext(ThemeContext);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
                width
            }}>
            <Image source={img} style={{ width: width * 0.8, height: width * 0.8, resizeMode: 'center', alignSelf: 'center' }}></Image>
            <Text style={[globalStyles.title, { color: colors.primary }]}>{title}</Text>
            <Text style={{ color: colors.text, marginTop: 20 }}>{desc}</Text>

        </View>
    )

}