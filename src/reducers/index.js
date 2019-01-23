
import { combineReducers } from 'redux'
import values from './values'
import temp from './temp'
import error from './error'
import loading from './loading'

export default combineReducers({
    values,
    temp,
    loading,
    error
})
