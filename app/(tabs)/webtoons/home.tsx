import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const webtoon = [{}, {}, {}, {}, {}, {}, {}, {}];

const home = () => {
	return (
		<View style={styles.webtoonContainer}>
			{webtoon.map((item, index) => {
				return (
					<View style={styles.webtoon} key={index}>
						<Link href={`webtoons/${index}`} style={styles.webtoonLink}>
							Webtoon {index + 1}
						</Link>
					</View>
				);
			})}
		</View>
	);
};

export default home;

const styles = StyleSheet.create({
	webtoon: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		textAlign: "center",
		display: "flex",
		backgroundColor: "rgb(225, 225, 225)",
	},
	webtoonContainer: {},
	webtoonLink: {},
});
