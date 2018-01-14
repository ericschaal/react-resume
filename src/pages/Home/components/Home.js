/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/
import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';


import Page from '../../../components/Page';
import SideColumn from './SideColumn';
import CenterColumn from './CenterColumn';

export default class Home extends Component<*, *> {
    render() {
        return (
            <Page>
                <Row>
                    <SideColumn/>
                    <Col className="hidden-sm hidden-xm" md="1"/>
                    <CenterColumn/>
                </Row>
            </Page>
        );
    }
}
