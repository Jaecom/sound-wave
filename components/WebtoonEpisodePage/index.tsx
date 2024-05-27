import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TestPage = () => {
	return (
		<View>
			<View style={styles.container}></View>
			<View style={styles.container}></View>
		</View>
	);
};

export default TestPage;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "black",
	},
});
