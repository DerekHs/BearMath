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
                matrices: createBody(action.matrixNames, state$.value.matrices.matrixMap)
            }
        }).pipe(
            map(response => operationSuccess(action.resultVariable, response.response.body)),
            catchError(error => of(operationError(error)))
        )
    )
)

function createBody(matrixNames, matrices) {
    let matrixValues = matrixNames.map(name => matrices.get(name).toMap())
    return Object.assign(...matrixNames.map((k, i) => ({ [k]: matrixValues[i] })))
}
