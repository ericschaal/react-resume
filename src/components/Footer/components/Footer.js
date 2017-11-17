/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default () => (
    <Container style={styles.fullWidth} fluid>
        <Row noGutters>
            <Col style={styles.footer} xl="12">Footer</Col>
        </Row>
    </Container>
)

const styles = {
    fullWidth: {
        paddingLeft: '0',
        paddingRight: '0',
    },
    footer: {
        background: 'blue',
        height: 75,
    }
};