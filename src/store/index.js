/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger';

import {routerMid, routerReducer} from '../navigation';


export default createStore(
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(routerMid, logger)
);