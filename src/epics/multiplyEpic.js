import { map } from 'rxjs/operators';

import { multiplySuccess } from 'actions/multiply'
import { MULTIPLY_BEGIN } from 'actions/actions'

export const multiplyEpic = action$ =>
    action$.ofType(MULTIPLY_BEGIN)
        .pipe(
            map((action) => (
                multiplySuccess()
            )))