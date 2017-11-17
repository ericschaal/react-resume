/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';


export default () => (
    <div style={styles.container}>
        <p style={styles.paragraph}>
            I built this site using <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>. The source code
            can be found on my <a href="https://github.com/ericschaal">Github profile</a>.
            I plan on supporting JSON resume Schema sometime in the future.
        </p>
    </div>
)

const styles = {
    container: {
        paddingLeft: 12,
        paddingRight: 12,
    },
    paragraph: {
        textAlign: 'justify'
    }
};