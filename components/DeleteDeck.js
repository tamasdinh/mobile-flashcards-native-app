import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { styles, redFlagColor, baseColorLight, accentColor2 } from '../utils/styles'

class DeleteDeck extends Component {
  
  dispatchDelete  = (deckName) => {
    console.log(`Action for deck ${'deckName'} deletion to be dispatched`)
    this.props.navigation.navigate('Decks')
  }
  
  render() {
    const { deckName, questionCount } = this.props
    return (
      <View style={[styles.container]}>
        <Text style={[styles.flaggedText, styles.keyText, {marginTop: 10}]}>
          Are you sure you want to delete the {deckName} deck?
        </Text>
        <Text style={{textAlign: 'center'}}>
          This deck contains {questionCount} question card{questionCount > 1 ? 's' : ''}.
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={[styles.button1, styles.shadow,
              {backgroundColor: accentColor2,
              borderColor: accentColor2,
              width: 150}]}>
            <Text
              style={{color: baseColorLight}}>
                Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.dispatchDelete()}
            style={[styles.button1, styles.shadow,
              {backgroundColor: redFlagColor,
              borderColor: redFlagColor,
              width: 150}]}>
            <Text
              style={{color: baseColorLight}}>
                Delete Deck
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ data }, { navigation}) {
  const { deckName } = navigation.state.params
  return {
    deckName,
    questionCount: data[deckName].questions.length
  }
}

export default connect(mapStateToProps)(DeleteDeck)