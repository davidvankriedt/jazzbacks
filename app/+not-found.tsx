import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: "Oops! Not Found"}}/>
        <View style={styles.container}>
            <Link href="/" style={styles.button}> Go back to the home screen!</Link>
        </View>
    </>
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
