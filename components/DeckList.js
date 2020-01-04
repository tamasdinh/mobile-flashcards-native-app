import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'

import { connect } from 'react-redux'
import { handleInitialData, setInitialData } from '../actions'

import Deck from './Deck'
import { styles, baseColorDark } from '../utils/styles'
import { id, checkID } from '../utils/db'


class DeckList extends Component {

  componentDidMount() {
    console.log('\nID from Decklist:', id)
    checkID(id).then(result => {
      if (result === null) {
        this.props.dispatch(handleInitialData(id))
      } else {
        this.props.dispatch(setInitialData(id, JSON.parse(result)))
      }
    })
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
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large'/>
          <Text style={{color: baseColorDark, marginTop: 10}}>Loading data...</Text>
        </View>
      )
    }
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
    loading: data ? false : true,
    decks: data ? Object.values(data).map(deck => ({title: deck.title, length: deck.questions.length})) : null
  }
}

export default connect(mapStateToProps)(DeckList)