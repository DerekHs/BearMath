import { CREATE_MATRIX } from "../actions/actions";
import { OrderedMap, Map, List } from "immutable"

const initialState = new OrderedMap({"example_matrix": new Map(
  {shape: new List([2,2]), numericValues: new List([1, 0, 0, 1])}
)})

const matrices = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_MATRIX:
        console.log("create matrix")
        return state.set(action.name, new Map({shape: action.shape, numericValues: action.numericValues}))
      default:
        return state
    }
  }
  
  export default matrices
