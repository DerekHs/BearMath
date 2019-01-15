
import { combineReducers } from 'redux'
import matrices from './matrices'
import generatedCode from './generatedCode'
import composites from './composites'

export default combineReducers({
    matrices,
    generatedCode,
    composites
})
