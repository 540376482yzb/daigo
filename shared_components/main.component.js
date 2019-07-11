import React, { useState, useEffect } from "react"
import FireBase from "../api_services/firebase"
import { View } from "react-native"
import { withRouter } from "react-router-native"
import { Root, Container, Footer, FooterTab, Button, Icon } from "native-base"
import IconButton from "./buttons/IconButton.component"

function Main({ children, history, location: { pathname } }) {
	useEffect(() => {
		FireBase.auth.onAuthStateChanged(user => {
			if (user) {
				history.push("/orders")
			} else {
				history.push("/")
			}
		})
	}, [])
	return (
		<Root>
			<Container>
				{children}
				{pathname !== "/" && (
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

export default withRouter(Main)
