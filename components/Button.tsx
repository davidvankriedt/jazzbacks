import { Pressable, View, StyleSheet, Text } from "react-native";
import { icon } from "@/constants/icon";
import React from "react";


interface Props {
    label?: string,
    type?: keyof typeof icon
}

export default function Button({ label, type }: Props) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert("You pressed a button.")}>
                { type ? React.createElement(icon[type]) : <></> }
                { label ? <Text style={styles.buttonLabel}>{label}</Text> : <></>}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
    },

    button: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    buttonLabel: {
        color: "blue",
        fontSize: 16,
    }
})