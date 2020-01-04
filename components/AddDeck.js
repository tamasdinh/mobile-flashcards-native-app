import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput }
  from 'react-native'
import { connect } from 'react-redux'

import { styles, baseColorLight } from '../utils/styles'

class AddDeck extends Component {

  state = {
    createDeckTitle: ''
  }

  createDeck = () => {
    console.log('Create deck', this.state.createDeckTitle)
    this.props.navigation.goBack()
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={[styles.keyText, {fontSize: 40}]}>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.button1, styles.textInput]}
          placeholder='Add deck title here'
          onChangeText={text => this.setState({createDeckTitle: text})}
          />
        <TouchableOpacity
          onPress={this.createDeck}
          style={[styles.button1, styles.button2, styles.shadow, {marginBottom: 150}]}>
          <Text style={{color: baseColorLight}}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

// export default connect()(AddDeck)
export default AddDeck