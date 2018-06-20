// @flow
type State = any
type Action = Object
type ActionCreator = any => Action
type CaseReducer = (State, Action) => State
type AsyncCaseReducer = {
  [status: string]: CaseReducer
}

export type { Action, ActionCreator, CaseReducer, AsyncCaseReducer }
