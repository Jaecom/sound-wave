import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		NanumSquareRegular: require("../assets/fonts/NanumSquareR.ttf"),
		NanumSquareBold: require("../assets/fonts/NanumSquareB.ttf"),
		NanumSquareExtraBold: require("../assets/fonts/NanumSquareEB.ttf"),
		NanumSquareLight: require("../assets/fonts/NanumSquareL.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="search" options={{ headerShown: false }} />
				<Stack.Screen name="+not-found" />
			</Stack>
		</GestureHandlerRootView>
	);
}
