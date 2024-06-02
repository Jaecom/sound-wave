import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
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
	const { comments, likes } = webtoon;
	const audio = webtoon.episodes[episodeId].audio;
	const { onBackward, onForward, togglePlay, isPlaying, speed, changeSpeed, seekTo } = useMusicPlayer(audio);
	const [initialStart, setInitialStart] = useState(false);

	const onPlayHandler = () => {
		if (initialStart === false) {
			setInitialStart(true);
			togglePlay();
		} else {
			setInitialStart(false);
			isPlaying ? togglePlay() : null;
		}
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
								{initialStart ? <PlayFilledLogo /> : <PlayLogo />}
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
				{initialStart && (
					<DetailedControl
						onPlay={togglePlay}
						onWindForward={onWindForwardHandler}
						onWindPrevious={onWindPreviousHandler}
						isPlaying={isPlaying}
						setSpeed={changeSpeed}
						speed={speed}
						seekTo={seekTo}
					/>
				)}
			</View>
			<View style={basicControl.container}>
				<BasicControl likes={likes} comments={comments} />
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
