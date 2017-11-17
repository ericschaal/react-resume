/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import Icon from 'react-fontawesome'

export default () => (

    <Container tag="footer" style={styles.fullWidth} fluid>
        <Row noGutters>
            <Col sm="12"><p style={styles.text}>Made with <Icon style={styles.heart} name="heart"/> by Eric Schaal</p></Col>
        </Row>
    </Container>

)

const styles = {
    fullWidth: {
        paddingLeft: '0',
        paddingRight: '0',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
    },
    heart: {
        color: 'red'
    }

};