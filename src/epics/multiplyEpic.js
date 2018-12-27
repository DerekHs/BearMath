import { mergeMap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs';
import { ofType } from 'redux-observable'


import { multiplySuccess, multiplyError } from 'actions/multiply'
import { MULTIPLY_BEGIN } from 'actions/actions'

export const multiplyEpic = (action$, state$) => action$.pipe(
    ofType(MULTIPLY_BEGIN),
    mergeMap(action =>
        ajax({
            url: 'https://nzr58np206.execute-api.us-west-2.amazonaws.com/beta-prod/operations/multiply',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                matrix_1: {
                    shape: state$.value.matrices.get(action.m1).get("shape").toJS(),
                    data: state$.value.matrices.get(action.m1).get("numericValues").toJS()
                },
                matrix_2: {
                    shape: state$.value.matrices.get(action.m2).get("shape").toJS(),
                    data: state$.value.matrices.get(action.m2).get("numericValues").toJS()
                }
                // matrix_1: {
                //     "shape": [2, 3],
                //     "data": [1, 2, 3, 4, 5, 6]
                // },
                // matrix_2: {
                //     "shape": [3, 2],
                //     "data": [1, 2, 3, 4, 5, 6]
                // }
            }
        }).pipe(
            map(response => multiplySuccess(response)),
            catchError(error => of(multiplyError(error)))
        )
    )
)
