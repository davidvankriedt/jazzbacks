import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#2648ff",
            headerStyle: {
                backgroundColor: "#2648ff",
                borderStyle: "solid",
                borderBottomColor: "grey",
                borderBottomWidth: 3,
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
        }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          headerTitle: "JazzBacks",
          tabBarIcon: ({ focused, color }) => (
          <Ionicons 
            name={focused ? "home-sharp" : "home-outline"}
            color={color}
            size={30}
            />
            ),
        }}
        />
      
      <Tabs.Screen 
        name="shop"
        options={{
          headerTitle: "Shop",
          tabBarIcon: ({ focused, color }) => (
          <Ionicons 
            name={focused ? "cart-sharp" : "cart-outline"}
            color={color}
            size={30}
            />
            ),
        }}
        />

      <Tabs.Screen 
        name="player"
        options={{
          headerTitle: "Player",
          tabBarIcon: ({ focused, color }) => (
          <Ionicons 
            name={focused ? "play-circle-sharp" : "play-circle-outline"}
            color={color}
            size={30}
            />
            ),
        }}
        />

      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused? "person-sharp" : "person-outline"}
              color={color}
              size={30}
            />
          )
        }}

      />
    </Tabs>
  )
}
