import * as uuid from 'uuid'
import { AsyncStorage } from 'react-native'

export const id = 'b886ffe3-c11e-490e-ab64-73d1f96617e1'
// export const id = uuid.v4()

export const db = {
  React: {
    title: 'React',
    questions: [
      {
        id: uuid.v4(),
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        id: uuid.v4(),
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        id: uuid.v4(),
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function checkID (id) {
  return AsyncStorage.getItem(id)
}

export function _getAllItems () {
  return db
}

export function _getQuestion (deck, id) {
  return db[deck].questions.find(q.id === id)
}

