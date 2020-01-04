import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

import { styles, baseColorLight } from '../utils/styles'

class AddCard extends Component {

  state = {
    cardQuestion: '',
    cardAnswer: ''
  }

  addCard = () => {
    console.log(`\nAdd card with:\nQuestion: ${this.state.cardQuestion}\nAnswer: ${this.state.cardAnswer}`)
    this.props.navigation.goBack()
  }

  render() {
    const { entryId } = this.props.navigation.state.params
    return (
      <KeyboardAvoidingView>
        <Text style={[styles.keyText]}>Add new card to {entryId} deck</Text>
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
          onPress={this.addCard}>
          <Text style={{color: baseColorLight}}>Add new card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCard