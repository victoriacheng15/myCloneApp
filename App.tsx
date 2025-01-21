import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopNav from "./components/topNav";
import UserInfo from "./components/userInfo";
import UsernameDescription from "./components/userDescription";
import MemberDropdown from "./components/memberDropdown";
import ImgView from  "./components/imgView"
import BottomNav from "./components/bottonNav"

export default function App() {
	return (
		<View style={styles.container}>
			<TopNav />
			<UserInfo />
			<UsernameDescription />
			<MemberDropdown />
			<StatusBar style="auto" />
			<View style={styles.imgViewContainer}>
				<ImgView />
			</View>
			<BottomNav />
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
