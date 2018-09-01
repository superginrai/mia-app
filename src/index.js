import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from '../node_modules/redux';
import logger from 'redux-logger';

const tour = (state = [], action) => {
    if (action.type === 'ADD_TO_TOUR') {
        return [...state, ...action.payload];
    } else if (action.type === 'RESET') {
        return [];
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
       tour,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
