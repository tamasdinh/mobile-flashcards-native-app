import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import Deck from './Deck'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params
    return {
      title: entryId
    }
  }

  addCard = () => {
    console.log('Add card')
  }

  startQuiz = () => {
    console.log('Start Quiz')
  }

  deleteDeck = () => {
    console.log('Delete Deck')
  }

  render() {
    return (
      <View>
        <Deck deckName={'React'} />
        <Text>{JSON.stringify(this.props)}</Text>
        <TouchableOpacity onPress={this.addCard}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.startQuiz}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteDeck}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// export default connect()(Deck)
export default DeckDetail