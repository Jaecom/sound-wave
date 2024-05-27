import { View, Text, FlatList } from "react-native";
import React from "react";
import { Webtoon, webtoonList } from "../../data/webtoon_list";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import WebtoonDetailTop from "./WebtoonDetailTop";
import { WebtoonEpisode, towerOfGodData } from "@/data/tower_of_god";
import EpisodeItem from "./EpisodeItem";

const WebtoonDetailPage = () => {
	const { title, author, day, tags, summary, age, episodes, id } = towerOfGodData;

	const onEpisodePressHandler = (episode: WebtoonEpisode) => {
		router.push(`/webtoons/${id}/${episode.id}`);
	};
	return (
		<View>
			<FlatList
				ListHeaderComponent={<WebtoonDetailTop />}
				data={episodes}
				renderItem={({ item }) => <EpisodeItem key={item.id} episode={item} onEpisodePress={onEpisodePressHandler} />}
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
