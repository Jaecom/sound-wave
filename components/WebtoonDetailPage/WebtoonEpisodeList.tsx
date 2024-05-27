import { View, Text, FlatList } from "react-native";
import React from "react";
import { Webtoon, webtoonList } from "../../data/webtoon_list";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import WebtoonDetailTop from "./WebtoonDetailTop";

const WebtoonEpisodeList = ({ data }: { data: any }) => {
	const handlePress = (item: Webtoon) => {
		if (item.id == 3) {
			router.push(`/webtoons/${item.id}`);
		}
	};

	return (
		<FlatList
			ListHeaderComponent={<WebtoonDetailTop />}
			data={data}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<TouchableOpacity onPress={() => handlePress(item)}>
						<View>
							<Text>{item.title}</Text>
						</View>
					</TouchableOpacity>
				</View>
			)}
			keyExtractor={(item, index) => index.toString()}
			contentContainerStyle={styles.container}
		/>
	);
};

export default WebtoonEpisodeList;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 16,
		paddingVertical: 22.5,
		minHeight: "100%",
		paddingBottom: 300,
	},
	card: {
		width: "32%",
	},
});
