import { _getAllItems } from '../utils/db'
import { AsyncStorage } from 'react-native'
import * as uuid from 'uuid'

export const SET_INITIAL_DATA = 'SET_INITIAL_DATA'
export const SET_ID = 'SET_ID'
export const SETUP_RESULTS = 'SETUP_RESULTS'

function setInitialData (id, data) {
  return {
    type: SET_INITIAL_DATA,
    id,
    data
  }
}

export function handleInitialData() {
  const data = JSON.stringify(_getAllItems())
  const id = JSON.stringify(uuid.v4())
  return (dispatch) => {
    return AsyncStorage.setItem(id, data)
    .then(dispatch(setInitialData(JSON.parse(id), JSON.parse(data))))
  }
}

export function setUpResults(deckName) {
  return {
    type: SETUP_RESULTS,
    deckName
  }
}