import React, { useState } from 'react';
import Modal from "react-native-modal"
import { View, StyleSheet, StatusBar } from "react-native"
import {
	Form,
	H3
} from "native-base"

/**
 * BottomModal
 * @param {Boolean} isVisible
 * @param {Function} setVisible
 * @param {String} title 
 */
function BottomModal({ isVisible, setVisible, title, ...props }) {
	return (
		<>
			{/* <StatusBar hidden={isVisible} /> */}
			<Modal
				isVisible={isVisible}
				onSwipeComplete={() => setVisible(false)}
				swipeDirection={["down"]}
				style={styles.bottomModal}>
				<Form style={styles.content}>
					<View style={styles.modalDragHandleBar}></View>
					<View style={styles.formTitle}><H3>{title}</H3></View>
					{props.children}
				</Form>

			</Modal>
		</>

	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	content: {
		backgroundColor: "white",
		padding: 20,
		alignItems: 'center',
		borderRadius: 10,
		borderColor: "rgba(0, 0, 0, 0.1)"
	},
	formTitle: {
		marginTop: 10,
		padding: 10
	},
	bottomModal: {
		justifyContent: "flex-end",
		margin: 0
	},
	contentTitle: {
		fontSize: 20,
		marginBottom: 12
	},
	modalDragHandleBar: {
		width: 10,
		height: 1,
		borderRadius: 10,
		backgroundColor: 'grey',
		paddingBottom: 2
	}
})

export default BottomModal;

