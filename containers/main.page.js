import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { NativeRouter, Switch, Route } from "react-router-native"
import Main from "../shared_components/main.component"
import FrontPage from "./front_page/index.page"
import OrderPage from "./orders/index.page"
import ProductPage from "./products/index.page"
import ContactPage from "./contacts/index.page"
import SettingPage from "./setting/index.page"

function MainApp() {
	return (
		<NativeRouter>
			<Main>
				<Switch>
					<Route exact path="/" component={FrontPage} />
					<Route exact path="/orders" component={OrderPage} />
					<Route exact path="/products" component={ProductPage} />
					<Route exact path="/contacts" component={ContactPage} />
					<Route exact path="/setting" component={SettingPage} />
				</Switch>
			</Main>
		</NativeRouter>
	)
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(MainApp)
