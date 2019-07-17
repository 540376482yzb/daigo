import React from "react"
import { StyleSheet } from "react-native"
import {
	Header,
	Body,
	Left,
	Right,
	Title,
} from "native-base"
import useHeaderControl from '../../../shared_components/headers/useHeader.hook'
import HeaderSearchMode from '../../../shared_components/headers/HeaderSearchMode.component'
import RootButton from '../../../shared_components/buttons/index'


function CustomerHeader() {
	const { searchMode, setSearchMode, cancelSearch, keyword, setKeyword, isVisible, setVisible } = useHeaderControl('customer_header')

	const renderResponsiveHeader = () => {
		if (!searchMode) {
			return (
				<Header style={styles.headerBackGround}>
					{/* Add Customer Button */}
					<Left style={styles.container}>
						<RootButton.IconButton
							type={'AntDesign'}
							name={'adduser'}
							iconStyle={[styles.headerIconColor, styles.iconPaddingHorizontal]}
							onPress={() => setVisible(true)}
						/>
					</Left>
					{/* Header Title */}
					<Body style={styles.container}>
						<Title style={styles.headerIconColor}>Contact</Title>
					</Body>
					{/* Search button */}
					<Right style={styles.container}>
						<RootButton.IconButton
							type="AntDesign"
							name="search1"
							iconStyle={styles.headerIconColor}
							onPress={() => setSearchMode(true)}
						/>
					</Right>
				</Header>
			)
		}
		return (
			<HeaderSearchMode cancelSearch={cancelSearch}
				keyword={keyword}
				setKeyword={setKeyword}
			/>
		)
	}
	return {
		renderResponsiveHeader,
		isVisible,
		setVisible,
		keyword
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerRightContainer: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center"
	},
	headerBackGround: {
		backgroundColor: "white"
	},
	hearderBackGroundInSearch: {
		backgroundColor: "#2d3561"
	},
	headerIconColor: {
		color: "#2d3561"
	},
	headerIconColorInSearch: {
		color: "white"
	},
	iconPaddingHorizontal: {
		paddingHorizontal: 10
	},
	iconMarginRight: {
		marginRight: 10
	},
	inputStyle: {
		color: "white"
	}
})

export default CustomerHeader
