/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import Icon from 'react-fontawesome';

export default () => (
    <div style={styles.container}>
        <p style={styles.header}>Me contacter</p>
        <ul className="fa-ul d-block mx-auto">
            <li>
                <Icon style={styles.icon} name="envelope-o"/>
                <a href="mailto:laurent.schaal@insa-lyon.fr">laurent.schaal@insa-lyon.fr</a>
            </li>
            <li>
                <Icon style={styles.icon} name="envelope-o"/>
                <a href="mailto:lavredios@gmail.com">lavredios@gmail.com</a>
            </li>
            <li>
                <Icon style={styles.icon} name="phone"/>
                <a href="tel:+1-438-929-7521">+33 7 69 88 95 57</a>
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