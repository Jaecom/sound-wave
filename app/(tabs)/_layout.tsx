import { Tabs } from "expo-router";
import React from "react";
import { useSegments } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const segment = useSegments();
	const page = segment[segment.length - 1];
	const pagesToHideTabBar = ["[episode]"];
	console.log(segment);
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#000000",
			}}
		>
			<Tabs.Screen
				name="webtoons"
				options={{
					title: "Webtoons",
					headerShown: false,
					tabBarStyle: { display: pagesToHideTabBar.includes(page) ? "none" : "flex" },
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
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
