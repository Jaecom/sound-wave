import React, { useEffect, useState } from "react";
import TrackPlayer from "react-native-track-player";

export const useMusicPlayer = (audio: any) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const [speed, setSpeed] = useState(1.0);

	useEffect(() => {
		const setup = async () => {
			TrackPlayer.registerPlaybackService(() => require("./service"));

			try {
				await TrackPlayer.setupPlayer();
			} catch (e) {}

			await TrackPlayer.add([
				{
					url: audio,
					title: "Track 1",
					artist: "Artist",
					duration: 200,
				},
			]);
			setIsReady(true);
		};

		setup();

		return () => {
			const reset = async () => {
				await TrackPlayer.reset();
			};

			reset();
			setIsReady(false);
			changeSpeed(1.0);
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

	const togglePlay = () => {
		setIsPlaying((isPlaying) => !isPlaying);
	};

	const onForward = async (seconds: number) => {
		const { position } = await TrackPlayer.getProgress();
		TrackPlayer.seekTo(position + seconds);
	};

	const onBackward = async (seconds: number) => {
		const { position } = await TrackPlayer.getProgress();
		TrackPlayer.seekTo(position - 5);
	};

	const changeSpeed = (speed: number) => {
		TrackPlayer.setRate(speed);
		setSpeed(speed);
	};

	const seekTo = (position: number) => {
		TrackPlayer.seekTo(position);
	};

	return { togglePlay, isPlaying, onForward, onBackward, changeSpeed, speed, seekTo };
};
