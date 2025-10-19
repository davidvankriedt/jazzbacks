import Button from "@/components/Button";
import { StyleSheet, View } from "react-native";


const PlaceholderImage = require("../../assets/images/background-image.png");



export default function Shop() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      </View>

      <View style={styles.footerContainer}>
      </View>
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
  },

  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },

  imageContainer: {
    flex: 1,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
  }
});
