import { ScrollView, StyleSheet, View, Image } from "react-native";



export default function SearchIndex() {
  const images = [
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
  ]

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentContainer}>
        <View style={styles.imageGrid}>
            {images.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                    <Image style={styles.image}></Image>
                </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 50,
    flex: 1,
  },

  contentContainer: {
    marginHorizontal: 20,
  },

  imageGrid: {
    flexDirection: "row",

  },

  imageWrapper: {

  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 18,
  }
});
