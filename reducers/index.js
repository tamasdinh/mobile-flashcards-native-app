import { SET_INITIAL_DATA, SETUP_RESULTS, ADD_DECK } from '../actions'

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
    default:
      return state
  }
}