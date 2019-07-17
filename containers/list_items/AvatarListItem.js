import React from 'react';
import { ListItem, Left, Body, Text, Right, Icon } from 'native-base'
import LetterThumbNail from '../../shared_components/thumbnails/LetterThumbNail'

export default function AvatarListItem({ primaryText = "primary Text", subText = "subText", onPress, ...props }) {
    return (
        <ListItem avatar {...props} onPress={onPress} >
            <Left>
                <LetterThumbNail letter={primaryText} />
            </Left>
            <Body>
                <Text>{primaryText}</Text>
                <Text note>{subText}</Text>
            </Body>
            <Right style={{ justifyContent: 'center' }}>
                <Icon type="AntDesign" name="right" />
            </Right>
        </ListItem>
    )
}