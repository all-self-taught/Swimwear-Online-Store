import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import cartReducer from "./redux/reducers/cartReducer";
import { rootSaga } from './redux/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
    cartReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

// then run the saga
sagaMiddleware.run(rootSaga)