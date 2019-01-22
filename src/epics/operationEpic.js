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
                matrices: createBody(action.dataNames, state$.value.values)
            }
        }).pipe(
            map(response => operationSuccess(action.resultVariable, response.response.body, action.misc)),
            catchError(error => of(operationError(error)))
        )
    )
)

function createBody(dataNames, state) {
    let dataValues = dataNames.map(name => [state.get(name)[0], state.get(name)[1].serialize()])
    console.log(Object.assign(...dataNames.map((k, i) => ({ [k]: dataValues[i] }))))
    return Object.assign(...dataNames.map((k, i) => ({ [k]: dataValues[i] })))
}
