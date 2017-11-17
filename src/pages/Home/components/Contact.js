/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import Icon from 'react-fontawesome';

export default () => (
    <div style={styles.container}>
        <p style={styles.header}>Contact Me</p>
        <ul className="fa-ul d-block mx-auto">
            <li>
                <Icon style={styles.icon} name="envelope-o"/>
                <a href="mailto:eric.schaal@mail.mcgill.ca">eric.schaal@mail.mcgill.ca</a>
            </li>
            <li>
                <Icon style={styles.icon} name="phone"/>
                <a href="tel:438-929-7521">438-929-7521</a>
            </li>
        </ul>
    </div>
);

const styles = {
    container: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-around'
    },
    header: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 24
    },
    icon: {
        marginRight: 12
    }
};