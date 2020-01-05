import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Animated } from 'react-native'

import { connect } from 'react-redux'
import { handleInitialData, setInitialData } from '../actions'

import Deck from './Deck'
import { styles, baseColorDark } from '../utils/styles'
import { id, checkID } from '../utils/db'


class DeckList extends Component {

  state = {
    bounceValue: new Animated.Value(1)
  }

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
      <Animated.View style={[styles.button1, styles.shadow, styles.deckContainer, { transform: [{scale: this.state.bounceValue}]}]}>
        <TouchableOpacity onPress={() => {
          Animated.sequence([
            Animated.timing(this.state.bounceValue, {duration: 200, toValue: .5}),
              Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4})
            ]).start()
            this.props.navigation.navigate(
              'DeckDetail',
              { deckName: item.title }
              )
              }}
              >
          <Deck deckName={item.title} noCards={item.length} />
        </TouchableOpacity>
      </Animated.View>
    )
  }

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