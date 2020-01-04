import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { styles } from '../utils/styles'

class DeckResults extends Component {
  render() {
    const { deckName } = this.props.navigation.state.params
    return (
      <View>
        <Text>Deck Results: {deckName}</Text>
      </View>
    )
  }
}

export default DeckResults