import React, { useState } from "react"
import { connect } from "react-redux"
import { View, StyleSheet } from "react-native"
import {
	Container,
	Content,
	Header,
	Body,
	Title,
	Spinner,
} from "native-base"

function Order() {
	return (
		<Container>
			<Header>
				<Body>
					<Title>Order</Title>
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

export default connect()(Order)
