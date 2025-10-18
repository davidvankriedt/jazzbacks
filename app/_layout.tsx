import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto"/>
      <Stack>
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerTitle: "Home",
            headerShown: false,
          }}
          />
        <Stack.Screen 
          name="about"
          options={{
            headerTitle: "About"
          }}
          />
    </Stack>
    </>
  )
}
