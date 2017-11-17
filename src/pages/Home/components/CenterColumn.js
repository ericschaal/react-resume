/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Col} from 'reactstrap';

import Section from '../../../components/Section';

export default () => (
    <Col className="float-md-left" style={styles.col} sm="12" lg={{size: 7}}>
        <Section name="user" title="ABOUT">
            <p style={styles.paragraph}>Blah blah</p>
        </Section>

        <Section name="mortar-board" title="EDUCATION">
            <p style={styles.paragraph}>Blah blah</p>
        </Section>

        <Section name="building" title="WORK EXPERIENCE">
            <p style={styles.paragraph}>Blah blah</p>
        </Section>

        <Section name="cog" title="PROJECTS">
            <p style={styles.paragraph}>Blah blah</p>
        </Section>

    </Col>
)


const styles = {
    col: {
        overflow:'hidden',
        clear:'both',
        background: '#f6f1ed',
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: '2px',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        marginBottom: 10,
    },
    paragraph: {
        textAlign: 'justify',
    }
};