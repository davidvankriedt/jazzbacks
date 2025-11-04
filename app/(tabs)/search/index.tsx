import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { productImages } from "@/constants/productImages";



export default function SearchIndex() {

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
            {productImages.map((image, index) => (
                <View key={index} style={styles.trackWrapper}>
                    <Image style={styles.image} src={image}></Image>
                    <Text style={styles.text}>All of Me - Backing Track.</Text>
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
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-around',
    rowGap: 20,
    columnGap: 12,
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
