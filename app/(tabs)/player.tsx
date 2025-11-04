import { ScrollView, StyleSheet, View, Text } from "react-native";
import ContentList from "@/components/ContentList";
import { productImages } from "@/constants/productImages";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Player</Text>
      </View>

      <View>
        <Button 
            type="player" 
            onPress={() => alert("You'll soon be able to play songs through this.")}></Button>
      </View>
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
