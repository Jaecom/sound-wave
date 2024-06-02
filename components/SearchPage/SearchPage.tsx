import React, { useState } from "react";
import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	StyleSheet,
	StatusBar,
	Keyboard,
	TouchableWithoutFeedback,
	Image,
} from "react-native";
import SearchCancelIcon from "@/assets/icons/search_cancel_icon.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { webtoonList } from "@/data/webtoon_list";
import { Link } from "expo-router";
import { router } from "expo-router";

const SearchPage = () => {
	const [text, setText] = useState("");
	const [selectedTab, setSelectedTab] = useState("전체");
	const webtoonResult = webtoonList.slice(2, 5);

	const clearText = () => {
		setText("");
	};

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView style={styles.container}>
				<View style={styles.searchContainer}>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.textInput}
							value={text}
							onChangeText={setText}
							placeholder="제목 또는 작가명 검색"
							accessibilityRole="search"
						/>
						{text.length > 0 && (
							<TouchableOpacity
								onPress={clearText}
								style={styles.clearButton}
								accessibilityLabel="텍스트 필드 모두 삭제"
								accessibilityRole="button"
							>
								<SearchCancelIcon />
							</TouchableOpacity>
						)}
					</View>
					<TouchableOpacity
						style={styles.cancelTextContainer}
						onPress={router.back}
						accessibilityLabel="검색 취소"
						accessibilityRole="button"
					>
						<Text style={styles.cancelText}>취소</Text>
					</TouchableOpacity>
				</View>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View style={styles.content}>
						<View>
							<View style={styles.resultTab}>
								{["전체", "웹툰", "베스트도전"].map((tab) => (
									<TouchableOpacity
										key={tab}
										style={[styles.textContainer, selectedTab === tab && styles.selectedTab]}
										onPress={() => setSelectedTab(tab)}
										aria-selected={selectedTab === tab}
										accessibilityLabel={tab}
										accessibilityRole="button"
									>
										<Text style={selectedTab === tab && styles.selectedTabText}>{tab}</Text>
									</TouchableOpacity>
								))}
							</View>
							<View style={webtoonStyles.container}>
								{text.length > 2 && (
									<>
										<Text
											style={webtoonStyles.header}
											accessible
											accessibilityLabel="웹툰 결과 수 2"
											accessibilityRole="text"
										>
											웹툰
										</Text>
										<View style={webtoonStyles.resultListContainer}>
											{webtoonResult.map((webtoon) => (
												<TouchableOpacity
													key={webtoon.id}
													onPress={() => router.push(`/webtoons/${webtoon.id}`)}
													accessibilityRole="button"
													accessibilityLabel={`작품명: ${webtoon.title} 작가명: ${webtoon.author} 별정: ${webtoon.rating}`}
												>
													<View style={webtoonStyles.info}>
														<Image style={webtoonStyles.thumbnail} source={webtoon.image} />
														<View>
															<Text style={webtoonStyles.title}>{webtoon.title}</Text>
															<Text style={webtoonStyles.author}>{webtoon.author}</Text>
															<Text style={webtoonStyles.rating}>{webtoon.rating}</Text>
														</View>
													</View>
												</TouchableOpacity>
											))}
										</View>
									</>
								)}
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</SafeAreaView>
		</>
	);
};

export default SearchPage;

const styles = StyleSheet.create({
	container: {
		paddingTop: 8,
	},
	searchContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 8,
	},
	cancelTextContainer: { padding: 10 },
	cancelText: {
		fontWeight: "bold",
	},
	inputContainer: {
		flex: 1,
	},
	textInput: {
		padding: 10,
		borderWidth: 1,
		borderColor: "#A6A7AB",
		borderRadius: 5,
	},
	clearButton: {
		position: "absolute",
		right: 10,
		top: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	clearButtonText: {
		fontSize: 20,
		color: "#999",
	},
	content: {
		height: "100%",
	},
	resultTab: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 14,
		borderBottomColor: "#E0E0E0", // Border color
		borderBottomWidth: 1, // Border width
		borderStyle: "solid",
	},
	textContainer: {
		paddingHorizontal: 8,
		paddingVertical: 16,
	},
	selectedTab: {
		borderBottomWidth: 2,
		borderColor: "#00DC64",
	},
	selectedTabText: {
		color: "#00DC64",
		fontWeight: "bold",
	},
});

const webtoonStyles = StyleSheet.create({
	container: {
		display: "flex",
		paddingHorizontal: 8,
		paddingVertical: 16,
	},
	header: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 16,
	},
	thumbnail: {
		height: 60,
		width: 80,
	},
	resultListContainer: {
		display: "flex",
		flexDirection: "column",
		gap: 8,
	},
	info: {
		display: "flex",
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	title: {
		fontSize: 14,
		fontWeight: "bold",
	},
	author: {
		fontSize: 12,
		color: "grey",
	},
	rating: {
		fontSize: 12,
	},
});
