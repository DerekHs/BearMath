import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX } from "../actions/actions";
import { OrderedMap, Map, List } from "immutable"

const initialState = new OrderedMap({
  "fibonacci_q": new Map({ shape: new List([2, 2]), numericValues: new List([1, 1, 1, 0]) }),
  "first_fibonacci": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) })
})

const matrices = (state = initialState, action) => {
  switch (action.type) {
    case UPSERT_MATRIX:
      if (state.contains(action.name)) {
        return state.updateIn([action.name], () => new Map({ shape: action.shape, numericValues: action.numericValues }))
      }
      return state.set(action.name, new Map({ shape: action.shape, numericValues: action.numericValues }))
    case RENAME_MATRIX:
      return state.mapKeys(k => {
        if (k == action.name) {
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
