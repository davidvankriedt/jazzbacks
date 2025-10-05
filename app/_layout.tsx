import { StatusBar } from "expo-status-bar";
import { Drawer } from 'expo-router/drawer';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto"/>
      <Drawer>
        <Drawer.Screen 
          name="(tabs)"
          options={{
            drawerLabel: "Home",
            headerShown: false,
          }}
          />
        <Drawer.Screen 
          name="about"
          options={{
            drawerLabel: "About"
          }}
          />
    </Drawer>
    </>
  )
}
