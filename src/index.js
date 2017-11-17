/**
 * Eric Schaal
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';


import store from './store';
import Root from './App';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';



import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));


registerServiceWorker();
