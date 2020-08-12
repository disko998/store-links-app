import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { storeReducer } from './stores'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    store: storeReducer,
})

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)
