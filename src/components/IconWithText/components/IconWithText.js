/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import FontAwesome from 'react-fontawesome';

import type {Props} from '../model';

export default ({textStyle, children, ...rest} : Props) => (
    <div style={styles.container}>
        <FontAwesome style={styles.icon} {...rest}/>
        {children}
    </div>
)

const styles = {
    container: {
        display: 'inline-block',
    },
    icon: {
        marginRight: 12,
    }
};
