import { CREATE_MATRIX } from "../actions/actions";
import { OrderedMap, Map } from "immutable"

const matrices = (state = new OrderedMap({"key": "value"}), action) => {
    switch (action.type) {
      case CREATE_MATRIX:
        console.log("create matrix")
        return state.set(action.name, new Map({shape: action.shape, numeric_values: action.numeric_values}))
      default:
        return state
    }
  }
  
  export default matrices
