/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React, {Children} from 'react';
import {Container} from 'reactstrap';

import type {Props} from '../model';

export default ({children} : Props) => (
    <Container style={styles.container} tag="section">
        { Children.map(children, (child, index) => {
            return React.cloneElement(child, {key: index});
        })}
    </Container>
)

const styles = {
    container: {
        marginTop: 60,
        marginBottom: 60,
    }
};