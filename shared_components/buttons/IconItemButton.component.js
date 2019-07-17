import React from 'react';
import { TouchableOpacity, StyleSheet, Clipboard } from 'react-native'
import { Row, Icon, Text, Toast } from 'native-base'

export default function IconItemButton({ text, icon = {}, iconStyle, textStyle }) {

    const writeToClipboard = (str) => () => {
        Clipboard.setString(str)
        Toast.show({
            text: "copied!",
            buttonText: "Okay",
            duration: 3000
        })
    }

    return <TouchableOpacity onPress={writeToClipboard(text)}>
        <Row style={styles.container}>
            <Icon {...icon} style={[styles.defaultIcon, iconStyle]} />
            <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </Row>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: { padding: 5 },
    defaultIcon: { color: 'white', fontSize: 18, marginRight: 10 },
    defaultText: { color: 'white' }
})