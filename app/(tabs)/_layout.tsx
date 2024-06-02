import { Link, Tabs } from "expo-router";
import React from "react";
import { useSegments } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import CalendarIcon from "@/assets/icons/tabs/tab_calendar_icon_line.svg";
import SavedIcon from "@/assets/icons/tabs/tab_saved_icon_line.svg";
import SmileIcon from "@/assets/icons/tabs/tab_smile_icon_line.svg";
import RecommendedIcon from "@/assets/icons/tabs/tab_complete_icon_line.svg";
import BlockIcon from "@/assets/icons/tabs/tab_block_icon_line.svg";
import CalendarFillIcon from "@/assets/icons/tabs/tab_calendar_icon_fill.svg";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const segment = useSegments();
	const page = segment[segment.length - 1];
	const pagesToHideTabBar = ["[episode]"];

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#000000",
				tabBarInactiveTintColor: "#9b9b9b",
			}}
		>
			<Tabs.Screen
				name="webtoons"
				options={{
					title: "웹툰",
					tabBarStyle: { display: pagesToHideTabBar.includes(page) ? "none" : "flex" },
					tabBarIcon: ({ focused }) => (focused ? <CalendarFillIcon /> : <CalendarIcon />),
					headerShown: false,
					tabBarAccessibilityLabel: "네비게이션 웹툰",
				}}
			/>
			<Tabs.Screen
				name="complete"
				options={{
					title: "추천완결",
					tabBarIcon: () => <RecommendedIcon />,
					tabBarAccessibilityLabel: "네비게이션 추천완결",
				}}
			/>
			<Tabs.Screen
				name="best"
				options={{
					title: "베스트 도전",
					tabBarIcon: () => <SavedIcon />,
					tabBarAccessibilityLabel: "네비게이션 베스트도전",
				}}
			/>
			<Tabs.Screen
				name="my"
				options={{
					title: "MY",
					tabBarIcon: () => <SmileIcon />,
					tabBarAccessibilityLabel: "네비게이션 MY",
				}}
			/>
			<Tabs.Screen
				name="more"
				options={{
					title: "더보기",
					tabBarIcon: () => <BlockIcon />,
					tabBarAccessibilityLabel: "네비게이션 더보기",
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					href: null,
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	topRightContainer: {
		marginRight: 20,
	},
});
