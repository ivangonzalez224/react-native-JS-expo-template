import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View>
      <View>
        <Text>Detalle</Text>
        <Link href="/">atrás</Link>
      </View>
    </View>
  );
}