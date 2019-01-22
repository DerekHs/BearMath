
import { combineReducers } from 'redux'
import values from './values'
import generatedCode from './generatedCode'
import error from './error'

export default combineReducers({
    values,
    generatedCode,
    error
})
