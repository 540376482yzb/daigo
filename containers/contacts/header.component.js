import React, { useState } from "react"
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

import IconButton from "../../shared_components/buttons/IconButton.component"

function useHeader() {
	const [searchMode, setSearchMode] = useState(false)
	const [keyword, setKeyword] = useState("")

	const cancelSearch = () => {
		setSearchMode(false)
		setKeyword("")
	}

	const renderResponsiveHeader = searchMode => {
		if (!searchMode) {
			return (
				<>
					<Left style={styles.container}>
						<IconButton
							type="AntDesign"
							name="adduser"
							iconStyle={[styles.headerIconColor, styles.iconPaddingHorizontal]}
							onPress={() => console.log("add")}
						/>
					</Left>
					<Body style={styles.container}>
						<Title style={styles.headerIconColor}>Contact</Title>
					</Body>
					<Right style={styles.container}>
						<IconButton
							type="AntDesign"
							name="search1"
							iconStyle={styles.headerIconColor}
							onPress={() => setSearchMode(true)}
						/>
					</Right>
				</>
			)
		}
		return (
			<>
				<Left>
					<IconButton
						type="Ionicons"
						name="ios-arrow-back"
						iconStyle={[
							styles.headerIconColorInSearch,
							styles.iconPaddingHorizontal
						]}
						onPress={() => cancelSearch()}
					/>
				</Left>
				<Right style={styles.headerRightContainer}>
					<Icon
						type="AntDesign"
						name="search1"
						style={[styles.headerIconColorInSearch, styles.iconMarginRight]}
					/>
					<Input
						placeholder="Search"
						placeholderTextColor="white"
						value={keyword}
						onChangeText={setKeyword}
						style={[styles.inputStyle]}
					/>
					<Icon
						type="SimpleLineIcons"
						name="people"
						style={[styles.headerIconColorInSearch]}
					/>
				</Right>
			</>
		)
	}

	const renderHeader = () => {
		return (
			<Header
				style={
					searchMode
						? styles.hearderBackGroundInSearch
						: styles.headerBackGround
				}>
				{renderResponsiveHeader(searchMode)}
			</Header>
		)
	}

	return {
		keyword,
		renderHeader
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

export default useHeader
