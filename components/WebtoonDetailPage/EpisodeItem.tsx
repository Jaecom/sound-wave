import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WebtoonEpisode } from "@/data/tower_of_god";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

type Props = {
	episode: WebtoonEpisode;
	onEpisodePress: (episode: WebtoonEpisode) => void;
};

const EpisodeItem = ({ episode, onEpisodePress }: Props) => {
	const { title, thumbnail, rating, date } = episode;

	return (
		<TouchableOpacity onPress={() => onEpisodePress(episode)}>
			<View style={styles.card}>
				<View style={styles.card}>
					<Image style={styles.thumbnail} source={thumbnail} />
					<View>
						<Text>{title}</Text>
						<View style={styles.subInfoContainer}>
							<Text style={styles.subInfo}>{rating}</Text>
							<Text style={styles.date}>{date}</Text>
						</View>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default EpisodeItem;
const styles = StyleSheet.create({
	thumbnail: {
		width: 85,
		height: 60,
		borderRadius: 4,
	},
	card: {
		paddingHorizontal: 8,
		paddingVertical: 5,
		height: 70,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		width: "100%",
	},
	subInfoContainer: {
		display: "flex",
		flexDirection: "row",
		marginTop: 2,
	},
	subInfo: {
		fontSize: 12,
		color: "#B9B9B9",
	},
	date: {
		marginLeft: 4,
		fontSize: 12,
		color: "#B9B9B9",
	},
});
