import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import TrackPlayer from "react-native-track-player";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const track1 = {
	url: require("../assets/tracks/tower_of_god_1.mp3"),
	title: "Track 1",
	artist: "Artist",
	duration: 200,
};

const MusicPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const setup = async () => {
			TrackPlayer.registerPlaybackService(() => require("./service"));
			await TrackPlayer.setupPlayer();
			await TrackPlayer.add([track1]);
			setIsReady(true);
		};

		setup();

		return () => {
			const reset = async () => {
				await TrackPlayer.reset();
			};

			reset();
			setIsReady(false);
		};
	}, []);

	useEffect(() => {
		if (!isReady) return;

		(async () => {
			try {
				if (isPlaying) await TrackPlayer.play();
				else await TrackPlayer.pause();
			} catch (e) {
				console.log(e);
			}
		})();
	}, [isPlaying]);

	const onPlay = () => {
		setIsPlaying((isPlaying) => !isPlaying);
	};

	const onForward = async () => {
		const { position } = await TrackPlayer.getProgress();
		TrackPlayer.seekTo(position + 5);
	};

	const onBackward = async () => {
		const { position } = await TrackPlayer.getProgress();
		TrackPlayer.seekTo(position - 5);
	};

	const onSpeed10 = async () => {
		TrackPlayer.setRate(1.0);
	};

	const onSpeed15 = async () => {
		TrackPlayer.setRate(1.5);
	};

	const onSpeed20 = async () => {
		TrackPlayer.setRate(2.0);
	};

	return (
		<View style={styles.container}>
			{isReady && (
				<>
					<View style={styles.controls}>
						<TouchableOpacity style={styles.button} onPress={onBackward}>
							<Text style={styles.buttonText}>-5</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={onPlay}>
							<Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={onForward}>
							<Text style={styles.buttonText}>+5</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.speed}>
						<TouchableOpacity style={styles.button} onPress={onSpeed10}>
							<Text style={styles.buttonText}>1.0x</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={onSpeed15}>
							<Text style={styles.buttonText}>1.5x</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.button} onPress={onSpeed20}>
							<Text style={styles.buttonText}>2.0x</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</View>
	);
};

export default MusicPlayer;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	speed: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
	},
	controls: {
		display: "flex",
		flexDirection: "row",
		gap: 10,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	buttonText: {
		fontSize: 24,
	},
});
