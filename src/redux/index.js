import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { storeReducer } from './stores'
import { storyReducer } from './story'

const composeEnhancers = __DEV__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

const rootReducer = combineReducers({
    store: storeReducer,
    story: storyReducer,
})

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
)
