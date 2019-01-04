import { UPSERT_MATRIX, RENAME_MATRIX, DELETE_MATRIX } from "../actions/actions";
import { OrderedMap, Map, List } from "immutable"

const initialState = new OrderedMap({
  "fibonacci_q": new Map({ shape: new List([2, 2]), numericValues: new List([1, 1, 1, 0]) }),
  "first_fibonacci": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci1": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci2": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci3": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci4": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci5": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci6": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci7": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci8": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci9": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci0": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonacci12": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonaccia7": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonaccis8": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonaccifd9": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonaccif0": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) }),
  "first_fibonaccis12": new Map({ shape: new List([2, 1]), numericValues: new List([1, 1]) })

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
