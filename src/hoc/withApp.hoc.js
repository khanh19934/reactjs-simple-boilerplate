// @flow
import {compose as ramdaCompose} from 'ramda'
import {compose} from 'recompose'
import Immutable from 'seamless-immutable'

import {insertIf} from '../utils'
import withLoading from '../hoc/withLoading.hoc'

const withApp = ({
  loading = false
}: Object = {}) => (WrappedComponent: any) => {
  const enhancers = Immutable([
    ...insertIf(loading,withLoading)
  ])
  return compose(...enhancers)(WrappedComponent)
}

export default withApp