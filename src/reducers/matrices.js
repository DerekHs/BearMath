import { CREATE_MATRIX, DELETE_MATRIX } from "../actions/actions";
import { OrderedMap, Map, List } from "immutable"

const initialState = new OrderedMap({
  "fibonacci_q": new Map({ shape: new List([2, 2]), numericValues: new List([1, 1, 1, 0]) }),
  "first_fibonacci": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) })
})

const matrices = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MATRIX:
      return state.set(action.name, new Map({ shape: action.shape, numericValues: action.numericValues }))
    case DELETE_MATRIX:
      return state.remove(action.name)
    default:
      return state
  }
}

export default matrices
