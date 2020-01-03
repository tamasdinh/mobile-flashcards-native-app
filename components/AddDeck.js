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

class AddDeck extends Component {

  state = {
    createDeckTitle: ''
  }

  createDeck = () => {
    console.log('Create deck')
  }

  render() {
    return (
      <View>
       {/* <KeyboardAvoidingView> */}
        <Text>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Add deck title here'
          // onChangeText={this.setState(text => ({createDeckTitle: text}))}
          />
        <TouchableOpacity onPress={this.createDeck}>
          <Text>Create Deck</Text>
        </TouchableOpacity>
       {/* </KeyboardAvoidingView> */}
      </View>
    )
  }
}

// export default connect()(AddDeck)
export default AddDeck