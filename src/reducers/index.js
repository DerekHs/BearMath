
import { combineReducers } from 'redux'
import matrices from './matrices'
import generatedCode from './generatedCode'
import composites from './composites'
import error from './error'

export default combineReducers({
    matrices,
    generatedCode,
    composites,
    error
})
