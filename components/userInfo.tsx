import { StyleSheet, Text, View, Image } from "react-native";

export default function UserInfo() {
	return (
		<View style={styles.container}>
			<View style={styles.profileHeader}>
				<Image
					source={{ uri: "https://picsum.photos/200" }}
					style={styles.image}
				/>
				<View style={styles.profileStats}>
					<View style={styles.info}>
						<Text style={styles.infoValue}>53</Text>
						<Text style={styles.infoLabel}>Posts</Text>
					</View>
					<View style={styles.info}>
						<Text style={styles.infoValue}>12</Text>
						<Text style={styles.infoLabel}>Members</Text>
					</View>
					<View style={styles.info}>
						<Text style={styles.infoValue}>1</Text>
						<Text style={styles.infoLabel}>Admins</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		paddingVertical: 16,
		gap: 30,
	},
	profileHeader: {
		display: "flex",
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
		gap: 16,
	},
	profileStats: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 16,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	info: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
	infoValue: {
		fontSize: 20,
		fontWeight: "bold",
	},
	infoLabel: {
		fontSize: 14,
		color: "gray",
	},
});
