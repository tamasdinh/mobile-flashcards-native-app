import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions'

import Deck from './Deck'


class DeckList extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  renderItem = ({ item }, keyExtractor) => {
    console.log('Key:', keyExtractor)
    return (
      <View>
        <TouchableOpacity onPress={() => {
          console.log(`Navigate to DeckDetail, Deck title ${item.title}`)
          this.props.navigation.navigate(
          'DeckDetail',
          { entryId: item.title }
          )}}>
          <Text>{JSON.stringify(this.props)}</Text>
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
  console.log('data from store:', data)
  return {
    decks: Object.values(data).map(deck => ({title: deck.title, length: deck.questions.length}))
  }
}

export default connect(mapStateToProps)(DeckList)