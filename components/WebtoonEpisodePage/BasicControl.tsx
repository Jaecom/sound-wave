import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CommentLogo from "@/assets/icons/comments.svg";
import HeartLogo from "@/assets/icons/heart.svg";
import NextEpisodeLogo from "@/assets/icons/next_episode.svg";
import PreviousEpisodeLogo from "@/assets/icons/previous_episode.svg";

const BasicControl = () => {
	return (
		<View style={basicControl.firstControl}>
			<View style={basicControl.group}>
				<View style={basicControl.textIconGroup}>
					<HeartLogo />
					<Text style={basicControl.controlText}>000</Text>
				</View>
				<View style={basicControl.textIconGroup}>
					<CommentLogo />
					<Text style={basicControl.controlText}>000</Text>
				</View>
			</View>
			<View style={basicControl.group}>
				<View style={basicControl.textIconGroup}>
					<PreviousEpisodeLogo />
					<Text style={basicControl.controlText}>이전회차</Text>
				</View>
				<View style={basicControl.textIconGroup}>
					<Text style={basicControl.controlText}>다음회차</Text>
					<NextEpisodeLogo />
				</View>
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
