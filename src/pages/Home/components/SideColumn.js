/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Col} from 'reactstrap';

import Separator from '../../../components/Separator';
import Profile from './Profile';
import Contact from './Contact';

export default () => (
    <Col style={styles.col} md="3">
        <Profile/>
        <Separator/>
        <Contact/>
    </Col>
)


const styles = {
    col: {
        display: 'tableCell',
        background: 'yellow',
        float: 'none',
        padding: '12px 8px 8px 12px'
    },
};