import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";


const PlaceholderImage = require("../../assets/images/background-image.png");



export default function Shop() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>

      <View style={styles.footerContainer}>
        <Button label="Press me"/>
        <Button label="What the hell" theme="primary"/>
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
