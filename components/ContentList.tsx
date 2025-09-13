import { Image } from "expo-image";
import { Text, StyleSheet, Pressable } from "react-native";
import { View, ScrollView } from "react-native";

type Props = {
    title: string;
    images: string[];
    onTitlePress: () => void;
}

export default function ContentList({ title, images, onTitlePress }: Props) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onTitlePress}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
            
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
