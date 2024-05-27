import { View, Text } from "react-native";
import React from "react";
import { StyleSheet, Image } from "react-native";
import { Webtoon } from "../../data/webtoon_list";

const WebtoonHomeCard = ({ item }: { item: Webtoon }) => {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={item.image} />
			<Text style={styles.title}>{item.title}</Text>
			<View style={styles.subInfo}>
				<Text style={styles.author}>{item.author}</Text>
				<Text style={styles.rating}>{item.rating}</Text>
			</View>
		</View>
	);
};

export default WebtoonHomeCard;

const styles = StyleSheet.create({
	card: {
		overflow: "hidden",
		marginBottom: 16,
	},
	title: {
		marginTop: 6,
		fontSize: 13,
		fontWeight: "bold",
	},
	subInfo: {
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	author: {
		fontSize: 11,
		fontWeight: "bold",
		color: "#999999",
	},
	rating: {
		marginLeft: 4,
		fontSize: 11,
		color: "#999999",
	},
	image: {
		width: "100%",
		height: 151,
		borderRadius: 4,
	},
});
