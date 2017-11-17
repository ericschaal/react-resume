/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React, {Children} from 'react';
import {Container, Row} from 'reactstrap';
import Icon from 'react-fontawesome';

import Separator from '../../../components/Separator';

import type {Props} from '../model';

export default ({children, title, name, ...rest}: Props) => (
    <Container style={styles.container} tag="section">
        <h2 style={styles.title}><Icon style={styles.icon} name={name}/>{title}</h2>
        <Separator style={{marginTop: 0, marginBottom: 8}}/>
        <Row style={styles.row}>
            {Children.map(children, ((child, index) => {
                return React.cloneElement(child, {key: index, ...rest})
            }))}
        </Row>
    </Container>
)

const styles = {
    container: {
        background: '#f6f1ed',
        marginBottom: 40,
    },
    title: {
        fontSize: 26,
    },
    icon: {
        paddingRight: 12,
    },
    row: {
        margin: 0,
    }
};