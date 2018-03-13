import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/materia/bootstrap.css'
import App from './App';

import { Provider } from 'react-redux'

import store from './redux/store'

let newStore = store()

ReactDOM.render(
<Provider store={newStore}>
    <App />
</Provider>,
document.getElementById('root'));
