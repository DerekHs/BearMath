import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX, OPERATION_SUCCESS } from "../actions/actions";
import { OrderedMap } from "immutable"

import Ndarray from "util/Ndarray"

const initialState = new OrderedMap({
  findMyEigenvalues: new Ndarray([1, 2, 3, 4], [2, 2]),
  findMySVD: new Ndarray([3, 2, 2, 2, 3, -2], [2, 3])
})

const matrices = (state = initialState, action) => {
  switch (action.type) {
    case UPSERT_MATRIX:
      if (state.contains(action.name)) {
        return state.updateIn([action.name], () => new Ndarray(action.numericValues, action.shape))
      }
      return state.set(action.name, new Ndarray(action.numericValues, action.shape))
    case RENAME_MATRIX:
      return state.mapKeys(k => {
        if (k === action.name) {
          return action.newName
        }
        return k
      })
    case DELETE_MATRIX:
      return state.remove(action.name)
    case OPERATION_SUCCESS:
      if (action.result.validOperation && action.result.dataType === 'NDARRAY') {
        let ndarray = action.result.result
        if (state.contains(action.result.resultVariable)) {
          return state.updateIn([action.resultVariable], () => new Ndarray(ndarray.numericValues, ndarray.shape))
        }
        return state.set(action.resultVariable, new Ndarray(ndarray.numericValues, ndarray.shape))
      } else {
        return state
      }
    default:
      return state
  }
}

export default matrices
