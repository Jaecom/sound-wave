export function formatTime(seconds: number) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(remainingSeconds).padStart(2, "0");
	return `${formattedMinutes}:${formattedSeconds}`;
}

export function extractSecondsAndMinutes(initialSeconds: number) {
	const minutes = Math.floor(initialSeconds / 60);
	const seconds = Math.floor(initialSeconds % 60);
	return { minutes, seconds };
}
