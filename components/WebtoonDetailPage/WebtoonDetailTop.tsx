import { View, Text, FlatList, Touchable } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, ActionSheetIOS } from "react-native";
import { Image } from "react-native";
import { WebtoonDetail, towerOfGodData } from "@/data/tower_of_god";
import { WebtoonEpisode } from "@/data/tower_of_god";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
	webtoonId: number;
	webtoonData: WebtoonDetail;
	onSortChange: (sortBy: string) => void;
	sortBy: string;
};

const WebtoonDetailTop = ({ webtoonId, onSortChange, sortBy, webtoonData }: Props) => {
	const { title, author, day, tags, summary, age, episodes, cover } = webtoonData;

	const onViewFirstEpisode = () => {
		router.push(`/webtoons/${webtoonId}/${episodes[0].id}`);
	};

	const onContinueEpisode = () => {
		router.push(`/webtoons/${webtoonId}/${episodes[0].id}`);
	};

	const onSortPressed = () => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ["날짜순", "최신순", "취소"],
				cancelButtonIndex: 2,
				title: "회차정렬",
			},
			(buttonIndex) => {
				switch (buttonIndex) {
					case 0:
						return onSortChange("날짜순");

					case 1:
						return onSortChange("최신순");
				}
			}
		);
	};

	return (
		<View style={styles.parent}>
			<View style={styles.top} />
			<View style={styles.coverContainer}>
				<Image style={styles.cover} source={cover} />
			</View>
			<View style={styles.container}>
				<Text style={styles.title} accessibilityLabel={`작품명 ${title}`}>
					{title}
				</Text>
				<Text style={styles.author} accessibilityLabel={`작가 ${author} ${day}요 웹툰`}>
					{author} · <Text style={styles.date}>{day}요일</Text>
				</Text>

				<Text style={styles.description}>{summary}</Text>
				<Text style={styles.age}>연령 {age}세 이용가</Text>
				<View style={styles.tagContainer} accessible accessibilityLabel={`관련 키워드 ${tags.map((tag) => tag)}`}>
					{tags.map((tag, index) => (
						<View key={index} style={styles.tag}>
							<Text style={styles.tagText} key={index}>
								#{tag}
							</Text>
						</View>
					))}
				</View>
				<View style={styles.controlContainer}>
					<TouchableOpacity style={styles.control} onPress={onViewFirstEpisode} accessibilityRole="button">
						<Text style={styles.controlText}>첫화보기</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.control}
						onPress={onContinueEpisode}
						accessibilityRole="button"
						accessibilityLabel="회차 이어서 보기"
					>
						<Text style={styles.controlText}>이어서 보기</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} accessibilityRole="button" accessibilityLabel="관심 작품 추가하기">
						<Text style={styles.controlText}>관심등록</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.control}
						onPress={onSortPressed}
						accessibilityRole="button"
						accessibilityLabel={`${sortBy} 선택됨 회차 정렬 필터`}
					>
						<Text style={styles.controlText}>{sortBy}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default WebtoonDetailTop;

const styles = StyleSheet.create({
	parent: {
		backgroundColor: "#ffffff",
	},
	top: {
		backgroundColor: "#103F6E",
		height: 163,
	},
	coverContainer: {
		position: "relative",
		height: 120,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	cover: {
		position: "absolute",
		top: -100,
		height: 200,
		borderRadius: 4,
	},
	container: {
		display: "flex",
		flexDirection: "column",
		rowGap: 10,
		padding: 16,
		paddingBottom: 0,
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
	controlContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		borderBottomColor: "#999999",
	},
	control: {
		paddingHorizontal: 18,
		paddingVertical: 10,
	},
	controlText: {
		color: "#999999",
	},
});
