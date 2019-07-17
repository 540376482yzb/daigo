import React from 'react';
import { Col } from 'native-base'

export default function Right({ size = 6, children }) {
    return (
        <Col size={size} style={{ paddingHorizontal: 15 }}>
            {children}
        </Col>
    )

}