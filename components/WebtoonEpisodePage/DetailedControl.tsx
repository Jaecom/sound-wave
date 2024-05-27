import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PlayLogo from "@/assets/icons/play.svg";
import WindForwardLogo from "@/assets/icons/wind_forward.svg";
import WindBackwardLogo from "@/assets/icons/wind_backward.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import PlayFilledLogo from "@/assets/icons/play_filled.svg";
import { ActionSheetIOS } from "react-native";

type Props = {
	onWindPrevious: () => void;
	onPlay: () => void;
	onWindForward: () => void;
	isPlaying: boolean;
	setSpeed: (speed: number) => void;
	speed: number;
};

const DetailedControl = ({ onWindPrevious, onPlay, onWindForward, isPlaying, setSpeed, speed }: Props) => {
	const onSpeedChangeHandler = () => {
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ["1.0X", "1.5X", "2.0X", "취소"],
				cancelButtonIndex: 3,
			},
			(buttonIndex) => {
				switch (buttonIndex) {
					case 0:
						return setSpeed(1.0);

					case 1:
						return setSpeed(1.5);

					case 2:
						return setSpeed(2.0);
				}
			}
		);
	};
	return (
		<View style={detailedControl.container}>
			<View style={detailedControl.secondRow}>
				<View style={detailedControl.audioControlGroup}>
					<TouchableOpacity onPress={onWindPrevious} style={detailedControl.group}>
						<WindBackwardLogo />
						<Text style={detailedControl.groupText}>후진</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={onPlay} style={detailedControl.group}>
						{isPlaying ? <PlayFilledLogo /> : <PlayLogo />}
						<Text style={detailedControl.groupText}>{isPlaying ? "정지" : "재생"}</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={onWindForward} style={detailedControl.group}>
						<WindForwardLogo />
						<Text style={detailedControl.groupText}>전진</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={detailedControl.group} onPress={onSpeedChangeHandler}>
					<Text style={detailedControl.speed}>{speed}X</Text>
					<Text style={detailedControl.groupText}>속도조절</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default DetailedControl;

const detailedControl = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#2D3648",
		padding: 8,
	},
	secondRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	audioControlGroup: {
		display: "flex",
		flexDirection: "row",
		gap: 20,
	},
	group: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		padding: 8,
	},
	groupText: {
		color: "white",
	},
	speed: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
	},
});
