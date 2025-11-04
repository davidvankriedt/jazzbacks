import Button from "@/components/Button";
import ContentList from "@/components/ContentList";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { productImages } from "@/constants/productImages";



export default function Profile() {
  const profileImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/GrLa0238.JPG/1200px-GrLa0238.JPG";
  const namePlaceholder = "Larry Van Kriedt";

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.headerContainer}>
        <Button type="settings"/>
      </View>

      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage}></Image>
        <Text style={styles.profileTitle}>{namePlaceholder}</Text>
      </View>

      <View style={styles.contentListContainer}>
        <ContentList 
          title="Library"
          images={productImages.toReversed()}
          add={true}
          onTitlePress={() => {alert("You'll soon be able to check the playlist out!")}}
        />
        <ContentList 
          title="Wednesday Gig Playlist"
          images={productImages}
          add={true}
          onTitlePress={() => {alert("You'll soon be able to check the playlist out!")}}
        />
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
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
    justifyContent: "space-between",
    marginHorizontal: 20,
    flex: 1/2,
  },

  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  profileTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
  },

  profileImage: {
        width: 200,
        height: 200,
        borderRadius: 300,
        marginBottom: 15,
  },
});
