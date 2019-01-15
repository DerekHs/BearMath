import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX, OPERATION_SUCCESS } from "../actions/actions";
import { OrderedMap } from "immutable"

import Ndarray from "util/Ndarray"

const initialState = {
  "matrixMap": new OrderedMap({
    foo: new Ndarray([1, 1, 1, 0], [2, 2]),
    fos: new Ndarray([1, 1], [1, 2])
  }),
  "mostRecentError": ""
}

const matrices = (state = initialState, action) => {
  switch (action.type) {
    case UPSERT_MATRIX:
      if (state.matrixMap.contains(action.name)) {
        return {
          ...state,
          matrixMap: state.matrixMap.updateIn([action.name], () => new Ndarray(action.numericValues, action.shape))
        }
      }
      return {
        ...state,
        matrixMap: state.matrixMap.set(action.name, new Ndarray(action.numericValues, action.shape))
      }
    case RENAME_MATRIX:
      return {
        ...state,
        matrixMap: state.matrixMap.mapKeys(k => {
          if (k === action.name) {
            return action.newName
          }
          return k
        })
      }
    case DELETE_MATRIX:
      return {
        ...state,
        matrixMap: state.matrixMap.remove(action.name)
      }
    case OPERATION_SUCCESS:
      if (action.result.validOperation) {
        let ndarray = action.result.result
        if (state.matrixMap.contains(action.result.resultVariable)) {
          return {
            ...state,
            matrixMap: state.matrixMap.updateIn([action.resultVariable], () => new Ndarray(ndarray.numericValues, ndarray.shape))
          }
        }
        return {
          ...state,
          matrixMap: state.matrixMap.set(action.resultVariable, new Ndarray(ndarray.numericValues, ndarray.shape))
        }
      } else {
        return { ...state, mostRecentError: action.result.result }
      }
    default:
      return state
  }
}

export default matrices
