import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TopNav() {
	const ICON_SIZE = 30;
	return (
		<View style={styles.topNav}>
			<TouchableOpacity onPress={() => alert("Back")}>
				<AntDesign name="left" size={ICON_SIZE} color="black" />
			</TouchableOpacity>
			<View style={styles.topNavText}>
				<Text style={styles.heading}>Group Profile</Text>
				<Text style={styles.subheading}>ootd_everyday</Text>
			</View>
			<TouchableOpacity onPress={() => alert("Add")}>
				<AntDesign name="plussquareo" size={ICON_SIZE} color="black" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	topNav: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		padding: 16,
	},
	topNavText: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
	},
	subheading: {
		fontSize: 16,
		color: "gray",
	},
});
