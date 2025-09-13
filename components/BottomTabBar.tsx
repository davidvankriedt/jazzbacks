import TabBarButton from "@/components/TabBarButton";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { useState } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

export default function BottomTabBar({ state, descriptors, navigation } : BottomTabBarProps) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100});

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabBarLayout = (e:LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  }

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}]
    }
  })

  return (
    <View onLayout={onTabBarLayout} style={styles.tabBar}>
      <Animated.View style={[animatedStyle, {
        position: 'absolute',
        backgroundColor: '#05177dff',
        borderRadius: 30,
        marginHorizontal: 12,
        height: dimensions.height - 15,
        width: buttonWidth - 25
      }]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {duration: 1500});
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton 
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name as "index" | "shop" | "player" | "profile"}
            color={ isFocused ? "#fff" : "#9FABEF" }
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#475FE1',
        marginHorizontal: 20,
        borderRadius: 35,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.1,
    },
})