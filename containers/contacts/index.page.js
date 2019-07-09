import React, { useState } from "react"
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
import IconButton from "../../shared_components/buttons/IconButton.component"
// import from '../../redux/actions/auth.action'

function Contact() {
	return (
		<Container>
			<Header>
				<Body>
					<Title>Contact</Title>
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

export default connect()(Contact)
