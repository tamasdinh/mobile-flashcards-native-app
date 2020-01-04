import * as uuid from 'uuid'
import { AsyncStorage } from 'react-native'

export const id = '970ba9b0-9ffa-4fe1-b8fe-f91fb3b31b2e'
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