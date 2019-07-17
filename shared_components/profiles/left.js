import React from 'react';
import { Col } from 'native-base'

export default function Left({ size = 4, ...props }) {
    return (
        <Col size={size} style={{ alignItems: 'flex-end', paddingHorizontal: 15 }}>
            {props.children}
        </Col>
    )
}