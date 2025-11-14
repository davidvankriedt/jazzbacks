import { ScrollView, StyleSheet, View, Image, Text } from "react-native";



export default function SearchIndex() {
  const images = [
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
  ]

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.contentContainer}
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Catalogue</Text>
        </View>
        <View style={styles.imageGrid}>
            {images.map((image, index) => (
                <View key={index} style={styles.trackWrapper}>
                    <Image style={styles.image} src={image}></Image>
                    <Text style={styles.text}>All of Me - Backing Track. The best track in the world, it is amazing!</Text>
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
    display: 'flex',
    display: 'flex',
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    rowGap: 30,
    columnGap: 20,
  },

  trackWrapper: {
  },

  text: {
    fontSize: 10,
    marginTop: 5,
    color: '#333',
    maxWidth: 170,
    textAlign: 'center',
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },

  title: {
    fontSize: 30,
    marginTop: 5,
    color: '#333',
    maxWidth: 170,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  image: {
    width: 170,
    height: 170,
    borderRadius: 18,
  }


});
