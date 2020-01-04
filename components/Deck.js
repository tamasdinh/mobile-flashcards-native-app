import React from 'react'
import { View, Text } from 'react-native'

import { styles } from '../utils/styles'

function Deck (props) {
  return (
    <View style={[styles.button1, styles.shadow, styles.deckContainer]}>
      <Text style={[styles.keyText, {marginTop: 10}]}>{props.deckName}</Text>
      <Text>{`${props.noCards} card`}{props.noCards > 1 ? 's' : ''}</Text>
    </View>
  )
}

export default Deck