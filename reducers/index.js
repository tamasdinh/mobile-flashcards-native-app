import { SET_INITIAL_DATA } from '../actions'

export default function reducer (state = {id: '', data: []}, action) {
  console.log(action.id, action.data)
  switch(action.type) {
    case SET_INITIAL_DATA:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}