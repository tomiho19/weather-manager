import { combineReducers } from 'redux'
import city from './city'
import localstorage from './localstorage'

const manageReducer = combineReducers({
    city,
    localstorage
});

export default manageReducer