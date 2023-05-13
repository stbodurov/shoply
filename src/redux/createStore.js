import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddle from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export default store;