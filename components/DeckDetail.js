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

  render() {
    const { deckName, noCards } = this.props
    return (
      <View style={styles.container}>
      
        <Deck deckName={deckName} noCards={noCards} />
      
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

function mapStateToProps({ data }, { navigation }) {
  const { deckName } = navigation.state.params
  return {
    deckName,
    noCards: data[deckName] ? data[deckName].questions.length : null
  }
}

export default connect(mapStateToProps)(DeckDetail)