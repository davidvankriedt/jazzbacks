import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>JazzBacks</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  text: {
    fontSize: 50,
    color: "blue"
  },

  button: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
  }
});
