// @flow
import {createAction} from 'redux-actions'
import axios from 'axios'
import {pathOr} from 'ramda'

import {setLoading,resetLoading} from '../../../utils'
import type {CaseReducer } from '../../../types'

const actionType = 'HOME/GET_PHOTO'

const getPhotoListAPI = () => axios.get('https://jsonplaceholder.typicode.com/photos')

const action = createAction(actionType,getPhotoListAPI)

const getPhotoListData = pathOr([],['data'])
const getPhotoList: CaseReducer = (state ,{payload}) => {

  return {
    ...state,
    photoList: getPhotoListData(payload),
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