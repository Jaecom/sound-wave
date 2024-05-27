import { View, Text, FlatList } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { towerOfGodData } from "@/data/tower_of_god";
import WebtoonEpisodeList from "./WebtoonEpisodeList";

const WebtoonDetailTop = () => {
	const { title, author, day, tags, summary, age, episodes } = towerOfGodData;

	return (
		<View>
			<View style={styles.top} />
			<View style={styles.coverContainer}>
				<Image style={styles.cover} source={towerOfGodData.cover} />
			</View>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.author}>
					{author} · <Text style={styles.date}>{day}</Text>
				</Text>

				<Text style={styles.description}>{summary}</Text>
				<Text style={styles.age}>{age}</Text>
				<View style={styles.tagContainer}>
					{tags.map((tag, index) => (
						<View style={styles.tag}>
							<Text style={styles.tagText} key={index}>
								#{tag}
							</Text>
						</View>
					))}
				</View>
			</View>
		</View>
	);
};

export default WebtoonDetailTop;

const styles = StyleSheet.create({
	top: {
		backgroundColor: "#103F6E",
		height: 163,
	},
	coverContainer: { position: "relative", height: 120 },
	cover: {
		position: "absolute",
		top: -100,
	},
	container: {
		display: "flex",
		flexDirection: "column",
		rowGap: 10,
		padding: 16,
	},
	webtoon: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		textAlign: "center",
		display: "flex",
		backgroundColor: "rgb(225, 225, 225)",
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	author: { fontSize: 13 },
	date: {
		color: "#9D9D9D",
	},
	age: {
		color: "#9D9D9D",
	},
	description: {
		color: "#9D9D9D",
	},
	tagContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 4,
	},

	tag: {
		padding: 7,
		backgroundColor: "#dddddd",
		borderRadius: 4,
	},
	tagText: {
		color: "#666666",
		fontWeight: "medium",
	},
	webtoonContainer: {},
	webtoonLink: {},
});
