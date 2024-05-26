import { View, Text } from "react-native";
import React from "react";
import MusicPlayer from "@/components/MusicPlayer";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const detail = () => {
	const { webtoonId, episode } = useLocalSearchParams();

	return (
		<>
			<Stack.Screen options={{ title: `Episode ${+(episode ?? 0) + 1}` }} />
			<View>
				<MusicPlayer />
			</View>
		</>
	);
};

export default detail;
