import React from 'react';
import { StyleSheet } from 'react-native';
import { Left } from 'native-base'
import IconButton from '../buttons/IconButton.component'

export default function Header({ onPress }) {
    return (
        <Left style={styles.header}>
            <IconButton name="left" onPress={onPress} />
        </Left>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute", zIndex: 999, left: 0, top: 0,
        paddingHorizontal: 10,
        paddingTop: 24,
        height: 80
    }
})