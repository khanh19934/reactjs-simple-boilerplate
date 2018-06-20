// @flow
import {createAction} from 'redux-actions'
import axios from 'axios'

import {setLoading,resetLoading} from '../../../utils'
import type {CaseReducer } from '../../../types'

const actionType = 'HOME/GET_PHOTO'

const getPhotoListAPI = () => axios.get('https://jsonplaceholder.typicode.com/photos')

const action = createAction(actionType,getPhotoListAPI)

const getPhotoList: CaseReducer = (state ,{payload}) => {
  const {data} = payload
  return {
    ...state,
    photoList: [...state.photoList,...data],
    loading: false
  }
}

const caseReducer = {
  [actionType]: {
    SUCCESS: getPhotoList,
    LOADING: setLoading,
    ERROR: resetLoading
  }
}

export default {action, caseReducer}