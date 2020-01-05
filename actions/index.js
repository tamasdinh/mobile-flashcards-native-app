import { _getAllItems } from '../utils/db'
import { AsyncStorage } from 'react-native'

export const SET_INITIAL_DATA = 'SET_INITIAL_DATA'
export const SET_ID = 'SET_ID'
export const SETUP_RESULTS = 'SETUP_RESULTS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const ADD_CORRECT = 'ADD_CORRECT'

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

function addCard ({ deckName, cardQuestion, cardAnswer }) {
  return {
    type: ADD_CARD,
    deckName,
    cardQuestion,
    cardAnswer
  }
}

export function handleAddCard ({ id, deckName, cardQuestion, cardAnswer }) {
  return (dispatch) => {
    dispatch(addCard({ deckName, cardQuestion, cardAnswer }))
    return AsyncStorage.getItem(id)
      .then(result => {
        const item = JSON.parse(result)[deckName]
        item.questions.push({
          question: cardQuestion,
          answer: cardAnswer
        })
        const itemToAdd = {
          [deckName]: item
        }
        return itemToAdd
      }).then(itemToAdd => {
        AsyncStorage.mergeItem(id, JSON.stringify(itemToAdd))
      })
  }
}

export function addCorrect ({ deckName }) {
  return {
    type: ADD_CORRECT,
    deckName
  }
}

function deleteDeck ({ deckName }) {
  return {
    type: DELETE_DECK,
    deckName
  }
}

export function handleDeleteDeck ({ id, deckName }) {
  return (dispatch) => {
    dispatch(deleteDeck({ deckName }))
    return AsyncStorage.getItem(id).then(result => {
      result = JSON.parse(result)
      delete result[deckName]
      AsyncStorage.setItem(id, JSON.stringify(result))
    })
  }
}