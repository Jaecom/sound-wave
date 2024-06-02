import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import WebtoonDetailTop from "./WebtoonDetailTop";
import { WebtoonDetail, WebtoonEpisode, towerOfGodData } from "@/data/tower_of_god";
import EpisodeItem from "./EpisodeItem";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
	webtoonData: WebtoonDetail;
};
const WebtoonDetailPage = ({ webtoonData }: Props) => {
	const { episodes, id } = webtoonData;
	const [sortBy, setSortBy] = useState("날짜순");
	const [sortedEpisodes, setSortedEpisodes] = useState(episodes);

	const onEpisodePress = (episode: WebtoonEpisode) => {
		if (![0].includes(episode.id)) return;
		router.push(`/webtoons/${id}/${episode.id}`);
	};

	const onSortChangeHandler = (sortBy: string) => {
		if (sortBy === "날짜순") {
			setSortedEpisodes(episodes.slice().sort((a, b) => a.id - b.id));
			setSortBy("날짜순");
		} else if (sortBy === "최신순") {
			setSortedEpisodes(episodes.slice().sort((a, b) => b.id - a.id));
			setSortBy("최신순");
		}
	};

	return (
		<View>
			<FlatList
				ListHeaderComponent={
					<WebtoonDetailTop
						webtoonId={id}
						webtoonData={webtoonData}
						sortBy={sortBy}
						onSortChange={onSortChangeHandler}
					/>
				}
				data={sortedEpisodes}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => onEpisodePress(item)}
						accessibilityLabel={`회차명 ${item.title} 별점 ${item.rating} 업로드 날짜 ${item.date}`}
						accessibilityRole="button"
					>
						<EpisodeItem key={item.id} episode={item} />
					</TouchableOpacity>
				)}
				keyExtractor={(item, index) => index.toString()}
				contentContainerStyle={styles.container}
			/>
		</View>
	);
};

export default WebtoonDetailPage;
const styles = StyleSheet.create({
	container: {},
});
