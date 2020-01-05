import { SET_INITIAL_DATA, SETUP_RESULTS, ADD_DECK, ADD_CARD, ADD_CORRECT, DELETE_DECK } from '../actions'

export default function reducer (state = {id: '', data: []}, action) {
  switch(action.type) {
    case SET_INITIAL_DATA:
      return {
        ...state,
        id: action.id,
        data: action.data
      }
    case SETUP_RESULTS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.deckName]: {
            ...state.data[action.deckName],
            results: 0
          }
        }
      }
    case ADD_DECK:
      return {
        ...state,
        data: {
          ...state.data,
          [action.deckName]: {
            title: action.deckName,
            questions: []
          }
        }
      }
    case ADD_CARD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.deckName]: {
            ...state.data[action.deckName],
            questions: state.data[action.deckName].questions.concat([{
              question: action.cardQuestion,
              answer: action.cardAnswer}])
          }
        }
      }
    case ADD_CORRECT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.deckName]: {
            ...state.data[action.deckName],
            results: state.data[action.deckName].results + 1
          }
        }
      }
    case DELETE_DECK:
      const switchState = Object.assign({}, state.data)
      delete switchState[action.deckName]
      return {
        ...state,
        data: {
          ...switchState
        }
      }
    default:
      return state
  }
}