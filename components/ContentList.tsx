import { Image } from "expo-image";
import { View, ScrollView, Text, StyleSheet, Pressable } from "react-native";
import Button from "@/components/Button";

type Props = {
    title: string;
    images: string[];
    add?: boolean;
    onTitlePress: () => void;
}

export default function ContentList({ title, images, add, onTitlePress }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Pressable onPress={onTitlePress}>
                    <Text style={styles.title}>{title}</Text>
                </Pressable>

                {add ? (<Button type="add"></Button>) : (<></>)}
            </View>
            
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {images.length !== 0 ? (
                    images.map((imageUri, index) => (
                        <Image
                            key={index}
                            source={imageUri}
                            style={styles.image}
                            contentFit="cover"
                        />
                    ))
                ) : (
                    <Text style={styles.emptyText}>Empty!</Text>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    containerHeader: {
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: '#333',
    },
    scrollContainer: {
        paddingHorizontal: 10,
        gap: 10,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 8,
    },
    emptyText: {
        padding: 20,
        color: '#666',
    }
});
