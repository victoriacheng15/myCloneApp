import React from "react";
import { StyleSheet, View, Image, FlatList, Dimensions } from "react-native";

export default function ImgView() {
    const images = [
        {id:"1", uri: require('../assets/galleryImgs/Daruk.png') },
        {id:"2", uri: require('../assets/galleryImgs/Ganondorf.png') },
        {id:"3", uri: require('../assets/galleryImgs/impa.png') },
        {id:"4", uri: require('../assets/galleryImgs/link.png') },
        {id:"5", uri: require('../assets/galleryImgs/mipha.png') },
        {id:"6", uri: require('../assets/galleryImgs/purah.png') },
        {id:"7", uri: require('../assets/galleryImgs/Revali.png') },
        {id:"8", uri: require('../assets/galleryImgs/Riju.png') },
        {id:"9", uri: require('../assets/galleryImgs/Sidon.png') },
        {id:"10", uri: require('../assets/galleryImgs/Tulin.png') },
        {id:"11", uri: require('../assets/galleryImgs/Yunobo.png') },
        {id:"12", uri: require('../assets/galleryImgs/zelda.png') },
    ];

    const numColumns = 3;
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const imageSize = screenWidth / numColumns - 10;
    const reservedHeight = screenHeight * 0.2; // reserved space

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                renderItem={({ item }) => (
                    <Image
                        source={typeof item.uri === "number" ? item.uri : { uri: item.uri }}
                        style={[styles.image, { width: imageSize, height: imageSize }]} // Dynamic sizing
                    />
                )}
                contentContainerStyle={[
                    styles.contentContainer,
                    { paddingBottom: reservedHeight }, // Add padding to reserve space
                ]}
            />
            {/* Reserved space with a line */}
            <View style={[styles.bottomLine, { height: reservedHeight }]}>
                <View style={styles.line} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    contentContainer: {
        padding: 5, // Padding around the grid
    },
    image: {
        margin: 5, // Spacing between images
        borderRadius: 8,
    },
    bottomLine: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        width: "80%",
        height: 1,
        backgroundColor: "#000", // Black line
    },
});
