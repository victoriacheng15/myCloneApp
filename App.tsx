import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopNav from "./components/topNav";
import UserInfo from "./components/userInfo";
import ImgView from  "./components/imgView"

export default function App() {
	return (
		<View style={styles.container}>
			<TopNav />
			<UserInfo />
			<StatusBar style="auto" />
			<View style={styles.imgViewContainer}>
				<ImgView />
			</View>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginTop: 40,
	},
	imgViewContainer: {
		flex: 1, // Let the gallery take up all available space
		width: "100%", // Ensure it stretches across the screen
	},
});
