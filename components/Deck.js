import React from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { styles } from '../utils/styles'

function Deck (props) {
  return (
    <View style={[styles.button1, styles.shadow, styles.deckContainer]}>
      <Text style={[styles.keyText, {marginTop: 10}]}>{props.deckName}</Text>
      <Text>{`${props.noCards} card`}{props.noCards > 1 ? 's' : ''}</Text>
    </View>
  )
}

function mapStateToProps({ data }, props) {
  return {
    noCards: data[props.deckName].questions.length
  }
}

export default connect(mapStateToProps)(Deck)