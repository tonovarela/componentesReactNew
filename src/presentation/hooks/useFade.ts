import { useRef } from "react";
import { Animated } from "react-native"

export const useFade = () => {
    
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const fadeIn = (callback?: Function) => {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start(callback && callback())
    }
    const fadeOut = (callback?: Function) => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true
        }).start(callback && callback())
    }

    return {
        fadeIn,
        fadeOut,
        animatedOpacity
    }
}