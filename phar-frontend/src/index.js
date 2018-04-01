import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/materia/bootstrap.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchAdoptions } from "./redux/actions";

let newStore = store()

newStore.dispatch(fetchAdoptions());

ReactDOM.render(
<Provider store={newStore}>
    <App />
</Provider>,
document.getElementById('root'));
