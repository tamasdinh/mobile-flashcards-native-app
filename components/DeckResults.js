import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { styles, accentColor2, accentColor3, baseColorLight } from '../utils/styles'

class DeckResults extends Component {
  render() {
    const { deckName, results, questionCount } = this.props
    return (
      <View style={[styles.container, {justifyContent: 'space-around'}]}>
        <Text style={[styles.keyText, {marginHorizontal: 50}]}>
          Congratulations!{'\n'}You have completed the {deckName} Deck Quiz.
        </Text>
        <Text
          style={[styles.keyText, {
            fontWeight: 'bold',
            color: accentColor2,
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 5
          }]}>
          Results:
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 40,
            color: accentColor3
          }}s>
          {(results / questionCount * 100).toFixed(0)}%
        </Text>
        <Text style={{textAlign: 'center'}}>You got {results} out of {questionCount} questions right.</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Decks')}
          style={[styles.button1, styles.button2,
            {backgroundColor: accentColor3,
            borderColor: accentColor3}]}>
          <Text
            style={[{color: baseColorLight, fontWeight: 'bold'}]}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps({ data }, { navigation }) {
  const { deckName } = navigation.state.params
  const { results } = data[deckName]
  const questionCount = data[deckName].questions.length
  return {
    deckName,
    results,
    questionCount
  }
}

export default connect(mapStateToProps)(DeckResults)