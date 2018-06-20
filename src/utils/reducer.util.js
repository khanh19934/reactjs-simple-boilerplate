// @flow
import { prop, map, values, reduce, compose, merge } from 'ramda'
import typeToReducer from 'type-to-reducer'

import type { CaseReducer, ActionCreator, AsyncCaseReducer } from '../types'

type ModuleAction = {
  action: ActionCreator,
  caseReducer: CaseReducer | AsyncCaseReducer
}
type ActionConfig = {
  [actionName: string]: ModuleAction
}

const setLoading: CaseReducer = (state, action) => ({
  ...state,
  loading: true
})
const resetLoading: CaseReducer = (state, action) => ({
  ...state,
  loading: false
})
const reducerGenerator = (actionConfig: ActionConfig, initialState: any) => {
  const actions = map(prop('action'))(actionConfig)
  const caseReducer = compose(
    reduce(merge, {}),
    values,
    map(prop('caseReducer'))
  )(actionConfig)

  const reducer = typeToReducer(caseReducer, initialState)

  return { actions, reducer }
}

export { setLoading, resetLoading, reducerGenerator }
