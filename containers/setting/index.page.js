import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { View, StyleSheet } from "react-native"
import {
	Container,
	Content,
	Header,
	Body,
	Right,
	Title,
	Spinner,
	Toast,
	Button,
	Icon
} from "native-base"

import { signOut } from "../../redux/actions/auth.action"

function Setting({ signOut }) {
	// useEffect(() => {
	// 	signOut()
	// })
	return (
		<Container>
			<Header>
				<Body>
					<Title>Setting</Title>
				</Body>
			</Header>
			<Content>
				<Spinner />
				<Spinner />
				<Spinner />
				<Spinner />
				<Spinner />
			</Content>
		</Container>
	)
}

export default connect(
	null,
	{ signOut }
)(Setting)
