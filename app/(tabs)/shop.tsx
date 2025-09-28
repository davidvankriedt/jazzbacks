import Button from "@/components/Button";
import ContentList from "@/components/ContentList";
import { ScrollView, StyleSheet, View } from "react-native";


const PlaceholderImage = require("../../assets/images/background-image.png");



export default function Shop() {
  const images = [
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
    "/Users/davidvankriedt/projects/jazzbacks/assets/images/background-image.png",
  ]

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button type="menu"/>
        <Button type="search"/>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentListContainer}>
        <ContentList 
        title="Wednesday Gig Playlist"
        images={images}
        onTitlePress={() => {alert("You'll soon be able to check the playlist out!")}}
        />
        <ContentList 
        title="Wednesday Gig Playlist"
        images={images}
        onTitlePress={() => {alert("You'll soon be able to check the playlist out!")}}
        />
        <ContentList 
        title="Wednesday Gig Playlist"
        images={images}
        onTitlePress={() => {alert("You'll soon be able to check the playlist out!")}}
        />
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
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
  },

  headerContainer: {
    flex: 1 / 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%',
    paddingHorizontal: 50,
  },

  contentListContainer: {
    marginHorizontal: 20,
    flex: 1/2,
  }
});
