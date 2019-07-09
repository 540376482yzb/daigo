import React, { useState, useEffect } from "react"
import { Provider } from "react-redux"
import store from "./redux/store"
import { StyleSheet, Text, View, ActivityIndicator } from "react-native"
import * as Font from "expo-font"
import { Ionicons } from "@expo/vector-icons"
import Main from "./containers/main.page.js"

export default function App() {
	const [loaded, setLoaded] = useState(false)

	//load native base font
	useEffect(() => {
		Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			...Ionicons.font
		}).then(() => setLoaded(true))
	}, [])

	if (!loaded) {
		return (
			<View>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<Provider store={store}>
			<Main />
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
})
