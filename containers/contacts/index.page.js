import React, { useState } from "react"
import { connect } from "react-redux"
import { View, StyleSheet } from "react-native"
import {
	Container,
	Content,
	Header,
	Body,
	Left,
	Right,
	Title,
	Spinner,
	Toast,
	Button,
	Icon,
	Item,
	Input,
	Text
} from "native-base"

import useHeader from "./header.component"
import Modal from "react-native-modal"

function Contact() {
	const { keyword, renderHeader } = useHeader()
	const [isVisible, setVisible] = useState(true)

	const renderModalContent = () => (
		<View style={styles.content}>
			<Text style={styles.contentTitle}>Hi 👋!</Text>
			<Button
				onPress={() => this.setState({ visibleModal: null })}
				title="Close"
			/>
		</View>
	)

	return (
		<Container>
			{renderHeader()}
			<View style={{ flex: 1 }}>
				<Modal
					isVisible={isVisible}
					onSwipeComplete={() => setVisible(false)}
					swipeDirection={["down", "left", "right"]}
					style={styles.bottomModal}>
					{renderModalContent()}
				</Modal>
			</View>
		</Container>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	bottomModal: {
		justifyContent: "flex-end",
		margin: 0,
		height: 400
	},
	content: {
		backgroundColor: "white",
		padding: 22,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
		borderColor: "rgba(0, 0, 0, 0.1)",
		height: 400
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 12
	}
})

export default connect()(Contact)
