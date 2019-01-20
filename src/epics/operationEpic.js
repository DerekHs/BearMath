import { mergeMap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs';
import { ofType } from 'redux-observable'


import { operationError, operationSuccess } from 'actions/operation'
import { OPERATION_BEGIN } from 'actions/actions'

export const operationEpic = (action$, state$) => action$.pipe(
    ofType(OPERATION_BEGIN),
    mergeMap(action =>
        ajax({
            url: 'https://nzr58np206.execute-api.us-west-2.amazonaws.com/beta-prod/operation',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                command: action.command,
                matrices: createBody(action.dataNames, action.dataTypes, state$.value)
            }
        }).pipe(
            map(response => operationSuccess(action.resultVariable, response.response.body, action.misc)),
            catchError(error => of(operationError(error)))
        )
    )
)

function createBody(dataNames, dataTypes, state) {
    function lookupMatrix(matrixType, matrixName) {
        var databank = null
        switch (matrixType) {
            case "NDARRAY":
                databank = state.matrices
                break
            case "TUPLE":
                databank = state.composites
                break
            case "SCALAR":
                databank = state.scalars
                break
            default:
                return null
        }
        return databank.get(matrixName)
    }

    let typeDataTuples = dataTypes.map((dataType, index) => [dataType, lookupMatrix(dataType, dataNames[index])])
    return Object.assign(...dataNames.map((k, i) => ({ [k]: typeDataTuples[i] })))
}
