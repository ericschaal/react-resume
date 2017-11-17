/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';

import type {Props} from '../model';

export default ({style} : Props) => (
    <hr style={Object.assign({}, styles.separator, style)}/>
)

const styles = {
    separator: {
        marginTop: '1rem',
        marginBottom: '1rem',
        border: 0,
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    }
};