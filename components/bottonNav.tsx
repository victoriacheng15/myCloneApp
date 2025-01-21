import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function BottomNav() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem} onPress={() => alert("Home")}>
                <Ionicons name="home-outline" size={24} color="black" />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => alert("Search")}>
                <Ionicons name="search-outline" size={24} color="black" />
                <Text style={styles.navText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => alert("Reels")}>
                <Feather name="video" size={24} color="black" />
                <Text style={styles.navText}>Reels</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => alert("Shop")}>
                <Ionicons name="cart-outline" size={24} color="black" />
                <Text style={styles.navText}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => alert("Profile")}>
                <Ionicons name="person-outline" size={24} color="black" />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderColor: "#ccc",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    navItem: {
        alignItems: "center",
    },
    navText: {
        fontSize: 12,
        color: "black",
    },
});

