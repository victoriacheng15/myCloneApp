import { StyleSheet, Text, View, Image } from "react-native";

export default function UserInfo() {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: "https://picsum.photos/200" }}
				style={styles.image}
			/>
			<View style={styles.infoContainer}>
				<View style={styles.info}>
					<Text style={styles.infoFont}>53</Text>
					<Text style={styles.infoFont2}>Posts</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.infoFont}>12</Text>
					<Text style={styles.infoFont2}>Members</Text>
				</View>
				<View style={styles.info}>
					<Text style={styles.infoFont}>1</Text>
					<Text style={styles.infoFont2}>Admins</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		padding: 16,
		gap: 30,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	infoContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 20,
	},
	info: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
	infoFont: {
		fontSize: 20,
		fontWeight: "bold",
	},
	infoFont2: {
		fontSize: 14,
		color: "gray",
	},
});
