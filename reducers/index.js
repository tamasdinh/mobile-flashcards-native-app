import { SET_INITIAL_DATA, SETUP_RESULTS } from '../actions'

export default function reducer (state = {id: '', data: []}, action) {
  switch(action.type) {
    case SET_INITIAL_DATA:
      return {
        ...state,
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
    default:
      return state
  }
}