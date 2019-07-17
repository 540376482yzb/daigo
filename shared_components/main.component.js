import React, { useState, useEffect } from "react"
import FireBase from "../api_services/firebase"
import { View, ActivityIndicator, StyleSheet } from "react-native"
import { withRouter } from "react-router-native"
import { connect } from 'react-redux'
import { Root, Container, Footer, FooterTab, Button, Icon, Toast } from "native-base"

function Main({ loading, error, children, history, location: { pathname } }) {
	useEffect(() => {
		FireBase.auth.onAuthStateChanged(user => {
			if (user) {
				history.push("/orders")
			} else {
				history.push("/")
			}
		})
	}, [])

	useEffect(() => {
		error && Toast.show({
			text: error,
			type: 'danger',
			duration: 1
		}, 3000)

	}, [error])

	const shouldShowFooter = (pathname) => {
		const pathList = ["orders", "contacts", "setting", "products"]
		return pathList.find(path => pathname.includes(path))
	}

	return (
		<Root>
			<Container>
				{loading && <View style={styles.spinner}><ActivityIndicator /></View>}
				{children}
				{!!shouldShowFooter(pathname) && (
					<Footer>
						<FooterTab>
							<Button
								style={{ backgroundColor: "#2d3561" }}
								active={pathname === "/orders"}
								onPress={() => history.push("/orders")}>
								<Icon name="list" />
							</Button>
						</FooterTab>
						<FooterTab>
							<Button
								style={{ backgroundColor: "#2d3561" }}
								active={pathname === "/products"}
								onPress={() => history.push("/products")}>
								<Icon type="AntDesign" name="tagso" />
							</Button>
						</FooterTab>
						<FooterTab>
							<Button
								style={{ backgroundColor: "#2d3561" }}
								active={pathname === "/contacts"}
								onPress={() => history.push("/contacts")}>
								<Icon name="contacts" />
							</Button>
						</FooterTab>
						<FooterTab>
							<Button
								style={{ backgroundColor: "#2d3561" }}
								active={pathname === "/setting"}
								onPress={() => history.push("/setting")}>
								<Icon type="AntDesign" name="setting" />
							</Button>
						</FooterTab>
					</Footer>
				)}
			</Container>
		</Root>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.globalReducer.loading,
		error: state.globalReducer.error
	}
}
export default connect(mapStateToProps)(withRouter(Main))

const styles = StyleSheet.create({
	spinner: {
		zIndex: 999,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: "center",
		alignItems: "center"
	},
})
