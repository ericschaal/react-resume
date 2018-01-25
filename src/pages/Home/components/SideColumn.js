/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Col} from 'reactstrap';

import Separator from '../../../components/Separator';
import Profile from './Profile';
import Contact from './Contact';
import Biography from './Biography';

export default () => (
    <Col  tag="aside" className="float-md-left" style={styles.col} lg={{size: 4, offset:0}} xs={{size: 10, offset: 1}}>
        <Profile/>
        <Separator/>
        <Contact/>
        <Separator/>
        <Biography/>
    </Col>
)


const styles = {
    col: {
        display: 'flex !important',
        overflow:'hidden',
        clear:'both',
        background: '#FDFDFD',
        padding: '12px 8px 8px 12px',
        borderRadius: '4px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        marginBottom: 10,
        height: '700px',
    },
};