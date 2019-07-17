import React from 'react';
import { View, StyleSheet } from 'react-native'
import { H3 } from 'native-base'

function LetterThumbNail({ letter, thumbnailStyle }) {


    return (
        <View style={[styles.thumbnail, thumbnailStyle]}>
            <H3>{letter.slice(0, 1)}</H3>
        </View>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#2d248a',
        height: 50,
        width: 50,
        marginRight: 5

    }
})

export default LetterThumbNail