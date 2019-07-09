import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { Icon } from "native-base"

export default function IconButton({
	onPress,
	type = "AntDesign",
	name = "logout",
	iconStyle
}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Icon type={type} name={name} style={[styles.icon, iconStyle]} />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	icon: {
		color: "white"
	}
})
