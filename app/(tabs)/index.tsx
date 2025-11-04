import { ScrollView, StyleSheet, View, Text } from "react-native";
import ContentList from "@/components/ContentList";
import { productImages } from "@/constants/productImages";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentListContainer}>
        <ContentList 
          title="Wednesday Gig Playlist"
          images={productImages}
          onTitlePress={() => alert("You'll soon be able to check the playlist out!")}
        />

        <ContentList 
          title="Sunday Church Playlist"
          images={productImages.toReversed()}
          onTitlePress={() => alert("More features coming soon!")}
        />

        <ContentList 
          title="Jam Practise"
          images={productImages}
          onTitlePress={() => alert("More features coming soon!")}
        />

        <ContentList 
          title="New Arrivals"
          images={productImages.toReversed()}
          onTitlePress={() => alert("More features coming soon!")}
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    color: "#333",
  },
  headerContainer: {
    flex: 1 / 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 50,
  },
  contentListContainer: {
    marginHorizontal: 20,
    flex: 1 / 2,
  },
});
