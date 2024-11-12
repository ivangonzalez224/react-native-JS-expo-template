import { Link } from "expo-router"; 
import { Pressable, ScrollView, Text, ActivityIndicator } from "react-native";
import FontAwesome from '@expo/vector-icons/Fontawesome';

export function Main() {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <FontAwesome name="home" />
        </Pressable>
    </ScrollView>
  )
}