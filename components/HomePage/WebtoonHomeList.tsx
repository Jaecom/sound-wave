import { View, Text, FlatList } from "react-native";
import React from "react";
import { Webtoon, webtoonList } from "../../data/webtoon_list";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import WebtoonHomeCard from "./WebtoonHomeCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const WebtoonHomeList = () => {
	const handlePress = (item: Webtoon) => {
		if (item.id == 3) {
			router.push(`/webtoons/${item.id}`);
		}
	};

	return (
		<FlatList
			data={webtoonList}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<TouchableOpacity onPress={() => handlePress(item)}>
						<WebtoonHomeCard item={item} />
					</TouchableOpacity>
				</View>
			)}
			keyExtractor={(item, index) => index.toString()}
			contentContainerStyle={styles.container}
			numColumns={3}
			columnWrapperStyle={{ justifyContent: "space-between" }}
		/>
	);
};

export default WebtoonHomeList;

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
