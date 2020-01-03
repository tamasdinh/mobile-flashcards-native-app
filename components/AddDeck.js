import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class AddDeck extends Component {
  render() {
    return (
      <View>
        <Text>AddDeck tab</Text>
      </View>
    )
  }
}

export default connect()(AddDeck)