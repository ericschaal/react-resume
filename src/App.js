/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/
import React, {Fragment} from 'react';

import {Provider} from 'react-redux';
import Home from "./pages/Home/components/Home";
import Background from "./components/Background/components/Background";
import NavigationBar from "./components/NavBar/components/NavBar";


export default ({store} : {store: Object}) => (
    <Provider store={store}>
      <Fragment>
        <Background/>
        <NavigationBar/>
        <Home/>
      </Fragment>
    </Provider>
)