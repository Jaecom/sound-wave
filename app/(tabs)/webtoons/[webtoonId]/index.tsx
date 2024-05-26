import { View, Text, SafeAreaView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

const episodes = [{}, {}, {}, {}, {}, {}, {}, {}];

const index = () => {
	const { webtoonId } = useLocalSearchParams();

	return (
		<>
			<Stack.Screen options={{ title: `Webtoon ${+(webtoonId ?? 0) + 1}` }} />
			<SafeAreaView>
				<View>
					{episodes.map((item, index) => {
						return (
							<View style={styles.webtoon} key={index}>
								<Link href={`/webtoons/${webtoonId}/${index}`}>Episode {index + 1}</Link>
							</View>
						);
					})}
				</View>
			</SafeAreaView>
		</>
	);
};

export default index;

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
