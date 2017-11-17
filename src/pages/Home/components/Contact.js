/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import Icon from 'react-fontawesome';

export default () => (
    <div>
        <p style={styles.header}>Contact Me</p>
        <ul className="fa-ul">
            <li><Icon style={styles.icon} name="envelope-o"/>eric.schaal@mail.mcgill.ca</li>
            <li><Icon style={styles.icon} name="envelope-o"/>ericschaal@icloud.com</li>
            <li><Icon style={styles.icon} name="phone"/>438-929-7521</li>
        </ul>
    </div>
);

const styles = {
    header: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 24
    },
    icon: {
        marginRight: 8
    }
};