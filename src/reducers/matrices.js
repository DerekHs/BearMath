import { CREATE_MATRIX } from "../actions/actions";
import { OrderedMap, Map, List } from "immutable"

const initialState = new OrderedMap({
  "identity": new Map({ shape: new List([2, 2]), numericValues: new List([1, 0, 0, 1]) }),
  "fibonacci_q": new Map({ shape: new List([2, 2]), numericValues: new List([1, 1, 1, 0]) }),
  "first_fibonacci": new Map({ shape: new List([2, 1]), numericValues: new List([5, 8]) })
}


)

const matrices = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MATRIX:
      console.log("create matrix")
      return state.set(action.name, new Map({ shape: action.shape, numericValues: action.numericValues }))
    default:
      return state
  }
}

export default matrices
