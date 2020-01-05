import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { styles, accentColor2, accentColor3, baseColorLight, baseColorDark } from '../utils/styles'

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
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Quiz', { deckName })}
            style={[styles.button1, styles.button2,
              {backgroundColor: accentColor3,
                borderColor: accentColor3,
                height: 50,
                width: 150}]}>
            <Text
              style={[{color: baseColorLight, fontWeight: 'bold'}]}>
              Restart Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DeckDetail', { deckName })}
            style={[styles.button1, styles.button2,
              {backgroundColor: accentColor2,
                borderColor: accentColor2,
                width: 150}]}>
            <Text
              style={[{color: baseColorLight, fontWeight: 'bold'}]}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
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