import React, { useState } from "react"
import { StyleSheet } from "react-native"
import {
    Header,
    Body,
    Left,
    Right,
    Title,
    Icon,
    Input,
} from "native-base"

import RootButton from "../buttons/index"

function useHeader(init = {}) {
    const [searchMode, setSearchMode] = useState(false)
    const [keyword, setKeyword] = useState("")
    const [isVisible, setVisible] = useState(false)
    const { leftIcon = { type: 'AntDesign', name: 'adduser' }, title = 'Contact' } = init
    const cancelSearch = () => {
        setSearchMode(false)
        setKeyword("")
    }

    const renderResponsiveHeader = searchMode => {
        if (!searchMode) {
            return (
                <>
                    {/* Add Customer Button */}
                    <Left style={styles.container}>
                        <RootButton.IconButton
                            {...leftIcon}
                            iconStyle={[styles.headerIconColor, styles.iconPaddingHorizontal]}
                            onPress={() => setVisible(true)}
                        />
                    </Left>
                    {/* Header Title */}
                    <Body style={styles.container}>
                        <Title style={styles.headerIconColor}>{title}</Title>
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
                </>
            )
        }
        return (
            <>
                <Left>
                    {/* Cancel Search BUtton */}
                    <RootButton.IconButton
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
                    {/* Search Input */}
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
        renderHeader,
        isVisible,
        setVisible
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
