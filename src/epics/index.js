import { combineEpics } from 'redux-observable';
import { multiplyEpic } from 'epics/multiplyEpic'

export const rootEpic = combineEpics(
    multiplyEpic,
);