/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {SocialIcon} from 'react-social-icons';

export default () => (
    <div>
        <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=180%C3%97180&w=180&h=180"
             className=" mx-auto d-block rounded-circle"></img>
        <div style={styles.info}>
            <p style={styles.header}>Eric Schaal</p>
            <p style={styles.subHeader}>Montreal, QC, Canada</p>
        </div>
        <ul className="d-block" style={styles.socialIconsList}>
            {urls.map(((url, i) => {
                return <li key={i} style={styles.socialIconsElement}><SocialIcon color="black" style={styles.socialIcons} url={url}/></li>
            }))}
        </ul>
    </div>
)

const urls = [
    'http://github.com',
    'http://twitter.com/jaketrent',
    'http://linkedin.com/in/jaketrent',
    'http://facebook.com/'
];

const styles = {
    info: {
        paddingTop: 20,
        lineHeight: '80%',
    },
    header: {
        fontWeight: 300,
        fontSize: 24,
        textAlign: 'center'
    },
    subHeader: {
        paddingTop: 0,
        fontWeight: 200,
        fontSize: 16,
        textAlign: 'center'
    },
    socialIcons: {
        height: 28,
        width: 28
    },
    socialIconsElement: {
        display: 'inline',
        padding: 3,
    },
    socialIconsList: {
        margin: 0,
        padding: 2,
        listStyleType: 'none',
        textAlign: 'center',
        display: 'inline',
    }
};