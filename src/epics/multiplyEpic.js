import { mergeMap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs';
import { ofType } from 'redux-observable'


import { multiplySuccess, multiplyError } from 'actions/multiply'
import { upsertMatrix } from 'actions/matrices'
import { MULTIPLY_BEGIN } from 'actions/actions'
import Ndarray from "util/Ndarray"

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
                matrix_1: state$.value.matrices.get(action.m1).toMap(),
                matrix_2: state$.value.matrices.get(action.m2).toMap()
            }
        }).pipe(
            map(response => upsertMatrix(action.resultVariable, JSON.parse(response.response.body).shape, JSON.parse(response.response.body).numericValues)),
            catchError(error => of(multiplyError(error)))
        )
    )
)
