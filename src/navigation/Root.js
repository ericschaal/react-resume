/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import React from 'react';
import Home from '../pages/Home';

import NavigationBar from "../components/NavBar";
import Background from "../components/Background";


export default () => (
  <div>
    <Background/>
    <NavigationBar/>
    <Home/>
  </div>
)