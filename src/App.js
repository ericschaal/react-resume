/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/
import React from 'react';

import {Provider} from 'react-redux';

import Root from './navigation';


export default ({store} : {store: Object}) => (
    <Provider store={store}>
        <Root/>
    </Provider>
)