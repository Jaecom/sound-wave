import { View, Text } from "react-native";
import React from "react";
import MusicPlayer from "@/components/MusicPlayer";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { towerOfGodData } from "@/data/tower_of_god";
import { windBreakerData } from "@/data/windbreaker";

const detail = () => {
	const { webtoonId, episode } = useLocalSearchParams();

	const webtoon = +(webtoonId ?? 0) === 3 ? towerOfGodData : windBreakerData;
	const audio = webtoon.episodes[0].audio;

	return (
		<>
			<Stack.Screen options={{ title: `Episode ${+(episode ?? 0) + 1}` }} />
			<View>
				<MusicPlayer audio={audio} />
			</View>
		</>
	);
};

export default detail;
