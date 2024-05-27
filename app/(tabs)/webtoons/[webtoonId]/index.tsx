import { View, Text, SafeAreaView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { webtoonList } from "@/data/webtoon_list";
import WebtoonDetailPage from "@/components/WebtoonDetailPage/WebtoonDetailPage";
import { StatusBar } from "react-native";
import Contants from "expo-constants";

const index = () => {
	const statusBarHeight = Contants.statusBarHeight;
	const { webtoonId } = useLocalSearchParams();
	const webtoon = webtoonList.find((item) => item.id === +(webtoonId ?? 0));

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<View style={[styles.top, { height: statusBarHeight }]} />
			<Stack.Screen options={{ title: webtoon?.title }} />
			<WebtoonDetailPage />
		</>
	);
};

export default index;

const styles = StyleSheet.create({
	top: {
		backgroundColor: "#103F6E",
	},
	webtoon: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		textAlign: "center",
		display: "flex",
		backgroundColor: "rgb(225, 225, 225)",
	},
	webtoonContainer: {},
	webtoonLink: {},
});
