import {createStore,applyMiddleware} from 'redux';
import combinReducers from './reducers.js';
import  thunkMiddleware from 'redux-thunk'
// import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combinReducers,applyMiddleware(thunkMiddleware))

export default store
