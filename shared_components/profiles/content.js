import React from 'react'
import { ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { Grid } from 'native-base'

export default function Content({ backgroundImageUri, ...props }) {
    return (
        <ImageBackground
            style={styles.container}
            source={{
                uri: backgroundImageUri || 'https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-gradient-beautiful-starry-sky-beautiful-night-sky-blue-star-river-background-image_85907.jpg'
            }}>
            <Grid>{props.children}</Grid>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width, paddingVertical: 60, paddingHorizontal: 10
    }
})
