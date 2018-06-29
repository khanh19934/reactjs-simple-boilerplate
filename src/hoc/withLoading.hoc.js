// @flow
import {propEq} from 'ramda'
import {renderComponent,branch} from 'recompose'
import LoadingMask from '../component/LoadingMask/LoadingMask.component'

const isLoading = propEq('loading',true)
const withLoading = branch(isLoading,renderComponent(LoadingMask))

export default withLoading
