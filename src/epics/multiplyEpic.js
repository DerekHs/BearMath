import { mergeMap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs';
import { ofType } from 'redux-observable'


import { multiplySuccess, multiplyError } from 'actions/multiply'
import { upsertMatrix } from 'actions/matrices'
import { MULTIPLY_BEGIN } from 'actions/actions'

import { List } from 'immutable'

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
            }
        }).pipe(
            map(response => upsertMatrix(action.resultVariable, new List(JSON.parse(response.response.body).shape), new List(JSON.parse(response.response.body).data))),
            catchError(error => of(multiplyError(error)))
        )
    )
)
