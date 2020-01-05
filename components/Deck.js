import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { styles } from '../utils/styles'

class Deck extends Component {

  render() {
    return (
      <View>
        <Text style={[styles.keyText, {marginTop: 10}]}>{this.props.deckName}</Text>
        <Text style={{textAlign: 'center'}}>{`${this.props.noCards} card`}{this.props.noCards > 1 ? 's' : ''}</Text>
      </View>
    )
  }
}

export default Deck