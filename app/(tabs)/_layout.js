import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
  	<Tabs
      screenOptions={{
      	headerShown: true,
      }}
  	>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />  
    </Tabs>;
  )
}