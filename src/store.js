// for holding updated files
// for creating store we need middilewares
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { restuarantListReducer } from './Reducers/restuarantReducer';

const reducers = combineReducers({

    restuarantReducer: restuarantListReducer

})

// middileware
const middileware = [thunk]
// store 
const store = createStore(reducers,applyMiddleware(...middileware))

export default store