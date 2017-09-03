import { combineReducers } from 'redux'
import catalog from './reducers/catalog'
import filters from './reducers/filters'

const reducers = {
    catalog,
    filters
}

const rootReducer = combineReducers(reducers)

export default rootReducer