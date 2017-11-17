/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux';

import Footer from '../components/Footer';

import About from '../pages/About';
import Home from '../pages/Home';

import type {RouterProps} from './model';
import NavigationBar from "../components/NavBar";
import Background from "../components/Background";

export default ({history}: RouterProps) => (
    <ConnectedRouter history={history}>
        <div style={{height: '100%'}}>
            <Background/>
            <NavigationBar/>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/projects'></Route>
            </Switch>

            <Footer/>
        </div>
    </ConnectedRouter>
)