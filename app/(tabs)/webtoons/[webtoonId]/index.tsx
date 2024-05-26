import { View, Text, SafeAreaView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { webtoonList } from "@/components/HomePage/webtoon_list";

const episodes = [{}, {}, {}, {}, {}, {}, {}, {}];

const index = () => {
	const { webtoonId } = useLocalSearchParams();
	const webtoon = webtoonList.find((item) => item.id === +(webtoonId ?? 0));

	return (
		<>
			<Stack.Screen options={{ title: webtoon?.title }} />
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
