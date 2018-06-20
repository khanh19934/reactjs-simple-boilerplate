// @flow
import {reducerGenerator,setLoading,resetLoading} from '../../utils'
import type {PhotoType,CaseReducer} from '../../types'

import getPhotoList from './actions/getPhoto.action'

type State = {
  photoList: PhotoType[],
  loading: boolean
}

const initialState: State = {
  photoList:[],
  loading: false
}

const { actions, reducer } = reducerGenerator(
  {
    getPhotoList
  },
  initialState
)

export { actions, initialState }
export default reducer
