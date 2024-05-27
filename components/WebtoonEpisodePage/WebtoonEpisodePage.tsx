import { View, Text } from "react-native";
import React, { useState } from "react";
import MusicPlayer from "@/components/MusicPlayer";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PlayLogo from "@/assets/icons/play.svg";
import PlayFilledLogo from "@/assets/icons/play_filled.svg";
import MoreLogo from "@/assets/icons/more.svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import BasicControl from "./BasicControl";
import DetailedControl from "./DetailedControl";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";

type Props = {
	webtoon: any;
	webtoonId: number;
	episodeId: number;
};

const WebtoonEpisodePage = ({ webtoon, episodeId }: Props) => {
	const audio = webtoon.episodes[episodeId].audio;
	const { onBackward, onForward, togglePlay, isPlaying, speed, changeSpeed } = useMusicPlayer(audio);

	const onPlayHandler = () => {
		togglePlay();
	};

	const onWindPreviousHandler = () => {
		onBackward(5);
	};
	const onWindForwardHandler = () => {
		onForward(5);
	};

	return (
		<>
			<Stack.Screen
				options={{
					title: `${episodeId}화`,
					headerShown: true,
					headerRight: () => (
						<View style={headerStyles.container}>
							<TouchableOpacity onPress={onPlayHandler}>
								{isPlaying ? <PlayFilledLogo /> : <PlayLogo />}
							</TouchableOpacity>
							<TouchableOpacity>
								<MoreLogo />
							</TouchableOpacity>
						</View>
					),
					headerStyle: {
						backgroundColor: "#2D3648",
					},
					headerTitleStyle: {
						color: "white",
					},
					headerBackTitleVisible: false,
					headerTintColor: "white",
				}}
			/>
			<View style={contentStyles.content}>
				<View style={{ backgroundColor: "black" }}></View>
				<DetailedControl
					onPlay={onPlayHandler}
					onWindForward={onWindForwardHandler}
					onWindPrevious={onWindPreviousHandler}
					isPlaying={isPlaying}
					setSpeed={changeSpeed}
					speed={speed}
				/>
			</View>
			<View style={basicControl.container}>
				<BasicControl />
			</View>
		</>
	);
};

export default WebtoonEpisodePage;

const headerStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		gap: 20,
		alignItems: "center",
	},
});

const contentStyles = StyleSheet.create({
	content: {
		position: "relative",
		height: "100%",
	},
});

const basicControl = StyleSheet.create({
	container: {
		backgroundColor: "#2D3648",
		height: "100%",
		padding: 10,
	},
});
