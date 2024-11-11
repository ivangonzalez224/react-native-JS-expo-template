import { Link } from "expo-router"; 
import { Pressable, ScrollView, Text, ActivityIndicator } from "react-native";

export function Main() {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <Text>Main component</Text>
        </Pressable>
    </ScrollView>
  )
}