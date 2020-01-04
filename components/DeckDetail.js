import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import Deck from './Deck'
import { styles, baseColorLight } from '../utils/styles'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckName } = navigation.state.params
    return {
      title: `${deckName} deck`
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
    const { deckName } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
      
        <Deck deckName={deckName} />
      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deckName }
          )}
          style={[styles.button1, styles.shadow, {marginTop: 100}]}>
          <Text>Add Card</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deckName }
          )}
          style={[styles.button1, styles.button2, styles.shadow]}>
          <Text style={{color: baseColorLight}}>Start Quiz</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'DeleteDeck',
            { deckName }
          )}
          style={[styles.button1, styles.shadow]}>
          <Text style={styles.flaggedText}>Delete Deck</Text>
        </TouchableOpacity>
      
      </View>
    )
  }
}

export default connect()(DeckDetail)