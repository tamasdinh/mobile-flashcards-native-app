import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Decks tab</Text>
      </View>
    )
  }
}

export default connect()(Home)