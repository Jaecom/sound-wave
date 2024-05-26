import { View, Text, SafeAreaView, Image, StatusBar, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import WebtoonHomeList from "./WebtoonHomeList";
import Contants from "expo-constants";

const HomePage = () => {
	const statusBarHeight = Contants.statusBarHeight;
	const [selectedTab, setSelectedTab] = useState("신작"); // Initially set to the first tab

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<View style={[styles.top, { height: statusBarHeight }]} />
			<SafeAreaView style={styles.background}>
				<Image style={styles.banner} source={require("@assets/webtoons/home_thumbnails/banner.jpeg")} />
				<View style={styles.tabContainer}>
					{["신작", "매일+", "월", "화", "수", "목", "금", "토", "일", "완결"].map((tab) => (
						<TouchableOpacity
							key={tab}
							onPress={() => setSelectedTab(tab)}
							style={[styles.tab, selectedTab === tab && styles.selectedTab]}
						>
							<Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>
						</TouchableOpacity>
					))}
				</View>
				<WebtoonHomeList />
			</SafeAreaView>
		</>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	background: { backgroundColor: "#ffffff" },

	top: {
		backgroundColor: "#B025CA",
		height: "100%",
		display: "flex",
	},
	tabContainer: {
		height: 44,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 14,
		borderBottomColor: "#E0E0E0", // Border color
		borderBottomWidth: 1, // Border width
		borderStyle: "solid",
	},
	tab: {
		height: "100%",
		paddingHorizontal: 5,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	tabText: {
		color: "#000000",
		fontWeight: "bold",
	},
	selectedTabText: {
		color: "#00DC64",
	},
	selectedTab: {
		borderBottomWidth: 2,
		borderColor: "#00DC64",
	},
	banner: {
		width: "100%",
		height: 169,
		objectFit: "contain",
	},
	webtoonContainer: {},
	webtoonLink: {},
});
