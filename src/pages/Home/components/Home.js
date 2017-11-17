/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/
import React, {Component} from 'react';

import {Row, Col} from 'reactstrap';


import Page from '../../../components/Page';
import SideColumn from './SideColumn';
import CenterColumn from './CenterColumn';

export default class Home extends Component<void, void> {
    render() {
        return (
            <Page>
                <Row>
                    <SideColumn/>
                    <CenterColumn/>
                </Row>
            </Page>
        );
    }
}
