import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserDescription() {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.description}>
                A place to share your creativity through animated images.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignSelf: "flex-start",
        width: "90%", 
        marginLeft: 16, 
    },
    username: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#000",
        textAlign: "left", 
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
        textAlign: "left", 
    },
    
});




