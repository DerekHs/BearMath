import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX } from "../actions/actions";
import { OrderedMap, Map, List } from "immutable"

import Ndarray from "util/Ndarray"

const initialState = new OrderedMap({
  foo: new Ndarray([1, 1, 1, 0], [2, 2])
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
    default:
      return state
  }
}

export default matrices
