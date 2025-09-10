import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About JazzBacks</Text>
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
    fontSize: 30,
    color: "blue"
  },

  button: {
    fontSize: 20,
    color: "blue",
    textDecorationLine: "underline",
  }
});
