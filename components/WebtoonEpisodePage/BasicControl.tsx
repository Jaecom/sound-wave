import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CommentLogo from "@/assets/icons/comments.svg";
import HeartLogo from "@/assets/icons/heart.svg";
import NextEpisodeLogo from "@/assets/icons/next_episode.svg";
import PreviousEpisodeLogo from "@/assets/icons/previous_episode.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
	comments: number;
	likes: number;
};

const BasicControl = ({ comments, likes }: Props) => {
	return (
		<View style={basicControl.firstControl}>
			<View style={basicControl.group}>
				<TouchableOpacity
					style={basicControl.textIconGroup}
					accessibilityLabel={`좋아요 ${likes}개`}
					accessibilityHint="활성화 하려면 두번 탭하세요"
					accessibilityRole="button"
				>
					<HeartLogo />
					<Text style={basicControl.controlText}>{likes}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={basicControl.textIconGroup}
					accessibilityLabel={`댓글 ${comments}개`}
					accessibilityHint="활성화 하려면 두번 탭하세요"
					accessibilityRole="button"
				>
					<CommentLogo />
					<Text style={basicControl.controlText}>{comments}</Text>
				</TouchableOpacity>
			</View>
			<View style={basicControl.group}>
				<TouchableOpacity style={basicControl.textIconGroup} accessibilityLabel="이전회차" accessibilityRole="button">
					<PreviousEpisodeLogo />
					<Text style={basicControl.controlText}>이전회차</Text>
				</TouchableOpacity>
				<TouchableOpacity style={basicControl.textIconGroup} accessibilityLabel="다음회차" accessibilityRole="button">
					<Text style={basicControl.controlText}>다음회차</Text>
					<NextEpisodeLogo />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BasicControl;

const basicControl = StyleSheet.create({
	container: {
		backgroundColor: "#2D3648",
		height: "100%",
		padding: 10,
	},
	textIconGroup: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	controlText: {
		color: "white",
		display: "flex",
	},
	firstControl: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	group: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
	},
});
