/**
 * Eric Schaal Copyrights 2017-2018
 * @flow
 **/

import createHistory from 'history/createBrowserHistory'
import React from 'react';
import { routerReducer, routerMiddleware} from 'react-router-redux'

import Router from './Root';

const history = createHistory();
const routerMid = routerMiddleware(history);

export {routerReducer, routerMid, history};
export default () => <Router history={history}/>;