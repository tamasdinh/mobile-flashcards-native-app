import React from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

function Deck (props) {
  return (
    <View>
      <Text>{props.deckName}</Text>
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