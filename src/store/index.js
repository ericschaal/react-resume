/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import { createStore, combineReducers, applyMiddleware } from 'redux'

import {routerMid, routerReducer} from '../navigation';


export default createStore(
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(routerMid)
);