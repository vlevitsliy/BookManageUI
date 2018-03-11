import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducers from './reducers';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunkMiddleware);
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
);

let store = createStore(combineReducers({mainReducers}), enhancer);

const Root = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
