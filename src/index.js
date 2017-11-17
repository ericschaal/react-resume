/**
 * Eric Schaal
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';


import store from './store';
import Root from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';



import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));


registerServiceWorker();
