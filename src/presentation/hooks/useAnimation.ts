import { useRef } from "react";
import { Animated, Easing } from "react-native"

export const useAnimation = () => {
    
    const animatedOpacity = useRef(new Animated.Value(1)).current;
    const position = useRef((new Animated.Value(-500))).current;
    const fadeIn = ({toValue=1,duration=300},callback?: Function) => {
        Animated.timing(animatedOpacity, {
            toValue,
            duration,
            useNativeDriver: true
        }).start(callback && callback())
    }
    const fadeOut = ({toValue=0,duration=300},callback?: Function) => {
        //resetAnimation();
        Animated.timing(animatedOpacity, {
            toValue,
            duration,
            useNativeDriver: true
        }).start(callback && callback())        
    }

    const startMoving = ({initPosition=-200,toValue=0},duration=300,bounce=false,cb?:Function) => {
        position.setValue(initPosition);
        Animated.timing(position,
            {
                toValue,
                duration,
                easing: bounce ?Easing.bounce:undefined,
                useNativeDriver: true,
            }).start(()=>cb && cb());
    }

    const resetAnimation=() => {
        
            position.resetAnimation();
            animatedOpacity.resetAnimation();        
        
    }


    return {
        fadeIn,
        fadeOut,
        position,
        startMoving,
        resetAnimation,
        animatedOpacity
    }
}