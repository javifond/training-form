import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/root.reducer';

export default function configureStore(initialState = {}) {
    const store = createStore(reducer, initialState, applyMiddleware(logger));

    return store;
}
