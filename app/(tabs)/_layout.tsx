import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';


export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={"house.fill"} drawable="ic_menu_mylocation"/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="player">
        <Label>Player</Label>
        <Icon sf={"play.fill"} drawable="ic_menu_mylocation"/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon sf={"person.fill"} drawable="ic_menu_mylocation"/>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Label>Search</Label>
        <Icon sf={"magnifyingglass.circle.fill"} drawable="ic_menu_mylocation"/>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}