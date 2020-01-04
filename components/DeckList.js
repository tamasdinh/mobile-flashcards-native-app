import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions'

import Deck from './Deck'
import { styles } from '../utils/styles'


class DeckList extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => {
          // TODO: add animation before nav to other component
          this.props.navigation.navigate(
          'DeckDetail',
          { deckName: item.title }
          )}}>
          <Deck deckName={item.title} />
        </TouchableOpacity>
      </View>
  )}

  render() {
    return (
      <FlatList
        data = {this.props.decks}
        renderItem={this.renderItem}
        keyExtractor={item => item.title}
      />
    )
  }
}

function mapStateToProps({ data }) {
  return {
    decks: Object.values(data).map(deck => ({title: deck.title, length: deck.questions.length}))
  }
}

export default connect(mapStateToProps)(DeckList)