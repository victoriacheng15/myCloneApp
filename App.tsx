import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopNav from "./components/topNav";
import UserInfo from "./components/userInfo";

export default function App() {
	return (
		<View style={styles.container}>
			<TopNav />
			<UserInfo />
			<StatusBar style="auto" />
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
});
