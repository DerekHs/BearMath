import { combineEpics } from 'redux-observable';
import { operationEpic } from 'epics/operationEpic'

export const rootEpic = combineEpics(
    operationEpic,
);