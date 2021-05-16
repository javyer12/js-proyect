import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, compose} from 'redux';
import reducer from "./reducers";
import initialState from './initialState';
import { Router } from "react-router";
import {createBrowserHistory} from "history";
import App from "./routes/App";


// store recive dos parametros (reducer: viene  del archivo reducer que creamos)(estado inicial)
// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const history = createBrowserHistory();
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducer, initialState, composeEnhancers)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <App />
    </Router>
     </Provider>,
    document.getElementById('root')
    );