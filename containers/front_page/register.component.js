import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Form, Item, Input, Button, Text, Icon } from "native-base"

const RegisterComponent = ({ handleRegister }) => {
	//state
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setconfirmPassword] = useState("")

	return (
		<Form>
			<View style={styles.headerContent}>
				<Icon type="AntDesign" name="antdesign" style={styles.headerIcon} />
			</View>
			<View>
				<Item style={styles.formItem}>
					<Icon type="Entypo" name="email" />
					<Input
						value={email}
						onChangeText={setEmail}
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="johnsmith@gmail.com"
					/>
				</Item>
				<Item style={styles.formItem}>
					<Icon type="Entypo" name="lock" />
					<Input
						value={password}
						onChangeText={setPassword}
						autoCapitalize="none"
						secureTextEntry={true}
						placeholder="password"
					/>
				</Item>
				<Item style={styles.formItem}>
					<Icon type="Entypo" name="lock-open" />
					<Input
						value={confirmPassword}
						onChangeText={setconfirmPassword}
						autoCapitalize="none"
						secureTextEntry={true}
						placeholder="confirm password"
					/>
				</Item>
			</View>
			<Button
				disabled={!email || !password || !confirmPassword}
				style={[styles.formItem, styles.submitButton]}
				primary
				rounded
				block
				onPress={() => handleRegister(email, password, confirmPassword)}>
				<Text>Register</Text>
			</Button>
		</Form>
	)
}

const styles = StyleSheet.create({
	headerContent: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center"
	},
	headerIcon: {
		fontSize: 40,
		color: "#bb1542"
	},
	formItem: { marginHorizontal: 15, marginBottom: 15 },
	submitButton: {
		marginVertical: 15
	}
})

export default RegisterComponent
