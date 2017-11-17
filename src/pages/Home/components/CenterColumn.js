/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Col} from 'reactstrap';

export default () => (
    <Col style={styles.col} md={{ size: 8, offset: 1 }}>

    </Col>
)


const styles = {
    col: {
        display: 'tableCell',
        background: 'red',
        float: 'none',
    }
};