import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TopNav() {
	return (
		<View style={styles.topNav}>
			<AntDesign name="left" size={30} color="black" />
			<View style={styles.topNavText}>
				<Text style={styles.heading}>Group Profile</Text>
				<Text style={styles.subheading}>ootd_everyday</Text>
			</View>
			<AntDesign name="plussquareo" size={24} color="black" />
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
    gap:4,
	},
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 16,
    color: "gray",
  }
});
