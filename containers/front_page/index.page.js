import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import {
	Container,
	Header,
	Body,
	Tabs,
	Tab,
	Icon,
	Spinner,
	Toast,
	Content
} from "native-base"
import { signUp, signIn } from "../../redux/actions/auth.action"
import LoginComponent from "./login.component"
import RegisterComponent from "./register.component"

function FrontPage({ signUp, signIn, loading, error }) {
	const renderSpinner = loading => {
		if (loading)
			return (
				<View style={styles.spinner}>
					<Spinner />
				</View>
			)
	}

	//Error Toast
	useEffect(() => {
		if (error) {
			Toast.show({
				text: error,
				buttonText: "ok"
			})
		}
	}, [error])

	return (
		<Container style={styles.container}>
			{renderSpinner(loading)}
			<Header transparent hasTabs style={styles.header}>
				<Body style={styles.headerBody}>
					<Icon type="Feather" name="shopping-bag" style={styles.headerIcon} />
				</Body>
			</Header>
			<Content style={styles.content}>
				<Tabs tabBarPosition="bottom" style={styles.tabsStyle}>
					<Tab
						heading="Sign in"
						tabStyle={styles.tabStyle}
						textStyle={styles.tabTextStyle}>
						<LoginComponent handleLogin={signIn} />
					</Tab>
					<Tab
						heading="Register"
						tabStyle={styles.tabStyle}
						textStyle={styles.tabTextStyle}>
						<RegisterComponent handleRegister={signUp} />
					</Tab>
				</Tabs>
			</Content>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.authReducer.loading,
		error: state.authReducer.error
	}
}

export default connect(
	mapStateToProps,
	{ signUp, signIn }
)(FrontPage)

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#bb1542"
	},
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
	header: {
		height: 150
	},

	headerBody: {
		justifyContent: "center",
		alignItems: "center"
	},

	headerIcon: {
		fontSize: 70,
		color: "white"
	},
	content: { padding: 20 },
	tabsStyle: {
		borderRadius: 10,
		overflow: "hidden"
	},

	tabStyle: {
		backgroundColor: "#50b6bb"
	},

	tabTextStyle: {
		color: "white"
	}
})
