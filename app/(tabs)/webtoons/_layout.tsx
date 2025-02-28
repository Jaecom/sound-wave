import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="home"
				options={{
					title: "Webtoons",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="[webtoonId]/[episode]/index"
				options={{
					title: "Episodes",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="[webtoonId]/index"
				options={{
					title: "Episodes",
					headerShown: true,
					headerTransparent: true,
					headerTintColor: "white",
					headerBackTitleVisible: false,
				}}
			/>
		</Stack>
	);
};

export default _layout;
