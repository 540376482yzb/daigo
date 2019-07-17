import React from "react"
import { StyleSheet } from "react-native"
import {
    Header,
    Left,
    Right,
    Icon,
    Input,
} from "native-base"
import RootButton from "../buttons/index"

export default function HeaderSearchMode({ cancelSearch, keyword, setKeyword }) {

    return (
        <Header style={styles.hearderBackGroundInSearch}>
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
        </Header>
    )
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

