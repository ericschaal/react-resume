/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/
import React, {Component} from 'react';

import { Container, Row, Col } from 'reactstrap';

import SideColumn from './SideColumn';
import CenterColumn from './CenterColumn';

export default class Home extends Component<void, void> {
    render() {
        return (
            <Container style={styles.container}>
                <Row style={styles.row}>
                    <SideColumn/>
                    <CenterColumn/>
                </Row>
            </Container>
        );
    }
}

const styles = {
    container: {
        display:'table',
        padding: '60px 0px 60px 0px', /*set left/right padding according to needs*/
        boxSizing: 'border-box',
        height:'100%',
    },
    row: {
        height: '100%',
        display: 'tableRow',
    },

};