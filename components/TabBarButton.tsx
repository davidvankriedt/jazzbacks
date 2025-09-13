import { Pressable, View, StyleSheet, Text } from "react-native";
import { icon } from "@/constants/icon";
import Animated, { useSharedValue, withSpring, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useEffect } from "react";


type Props = {
    onPress: () => void,
    onLongPress: () => void,
    isFocused: boolean,
    routeName: keyof typeof icon,
    color: string,
}

export default function TabBarButton({ onPress, onLongPress, isFocused, routeName, color }: Props) {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, 
        {duration: 350}
        );   
    },[scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

        return { 
            transform: [{
                scale: scaleValue,
            }],
        }
    });

    return (
        <Pressable 
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
        >
            <Animated.View style={animatedIconStyle}>
                {icon[routeName]({
                color: color
                })}     
            </Animated.View> 
        </Pressable>
    )
}

const styles = StyleSheet.create({
    tabBarItem: {
        marginVertical: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    }
})