import React, { Component } from 'react'
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { styles, baseColorLight } from '../utils/styles'
import { handleAddCard } from '../actions'

class AddCard extends Component {

  state = {
    cardQuestion: '',
    cardAnswer: ''
  }

  addCard = () => {
    this.props.dispatch(handleAddCard({
      id: this.props.id,
      deckName: this.props.deckName,
      cardQuestion: this.state.cardQuestion,
      cardAnswer: this.state.cardAnswer
    }))
    this.props.navigation.goBack()
  }

  render() {
    return (
      <KeyboardAvoidingView>
        <Text style={[styles.keyText]}>Add new card to {this.props.deckName} deck</Text>
        <TextInput
          style={[styles.button1, styles.textInput]}
          placeholder='New question here'
          onChangeText={(text) => this.setState({cardQuestion: text})}/>
        <TextInput
          style={[styles.button1, styles.textInput]}
          placeholder='Answer to new question here'
          onChangeText={(text) => this.setState({cardAnswer: text})}/>
        <TouchableOpacity
          style={[styles.button1, styles.button2]}
          onPress={this.addCard}
          disabled={!this.state.cardQuestion || !this.state.cardAnswer}>
          <Text style={{color: baseColorLight}}>Add new card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps({ id }, { navigation }) {
  return {
    id,
    deckName: navigation.state.params.deckName
  }
}

export default connect(mapStateToProps)(AddCard)