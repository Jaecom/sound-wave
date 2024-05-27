import { View, Text } from "react-native";
import React from "react";
import MusicPlayer from "@/components/MusicPlayer";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { towerOfGodData } from "@/data/tower_of_god";
import { windBreakerData } from "@/data/windbreaker";
import WebtoonEpisodePage from "@/components/WebtoonEpisodePage/WebtoonEpisodePage";
import TestPage from "@/components/WebtoonEpisodePage";

const detail = () => {
	const { webtoonId: webtoonIdString, episode: episodeString } = useLocalSearchParams();

	const webtoonId = +(webtoonIdString ?? 0);
	const episodeId = +(episodeString ?? 0);

	const webtoon = webtoonId === 3 ? towerOfGodData : windBreakerData;

	return <WebtoonEpisodePage webtoon={webtoon} webtoonId={webtoonId} episodeId={episodeId} />;
};

export default detail;
