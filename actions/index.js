import { _getAllItems } from '../utils/db'
import { AsyncStorage } from 'react-native'

export const SET_INITIAL_DATA = 'SET_INITIAL_DATA'
export const SET_ID = 'SET_ID'
export const SETUP_RESULTS = 'SETUP_RESULTS'
export const ADD_DECK = 'ADD_DECK'

export function setInitialData (id, data) {
  return {
    type: SET_INITIAL_DATA,
    id,
    data
  }
}

export function handleInitialData(id) {
  const data = _getAllItems()
  return (dispatch) => {
    return AsyncStorage.setItem(id, JSON.stringify(data))
      .then(() => dispatch(setInitialData(id, data)))
  }
}

export function setUpResults(deckName) {
  return {
    type: SETUP_RESULTS,
    deckName
  }
}

function addDeck(deckName) {
  return {
    type: ADD_DECK,
    deckName
  }
}

export function handleAddDeck(id, deckName) {
  const deck = {
    [deckName]: {
      title: deckName,
      questions: [],
    }
  }
  return (dispatch) => {
    return AsyncStorage.mergeItem(id, JSON.stringify(deck))
    .then(dispatch(addDeck(deckName)))
  }
}