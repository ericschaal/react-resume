/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';


export default () => (
    <div style={styles.container}>
        <p style={styles.paragraph}>
            I built this site with React components and a JSON Resume Schema.
            The full source code can be found in my Github repo.
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