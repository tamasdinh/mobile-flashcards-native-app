import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator }
  from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions'

import { styles, baseColorLight, baseColorDark, redFlagColor } from '../utils/styles'

class AddDeck extends Component {

  state = {
    createDeckTitle: '',
    problem: false,
    inputColor: baseColorDark
  }

  createDeck = () => {
    this.props.dispatch(handleAddDeck(this.props.id, this.state.createDeckTitle))
      .then(this.props.navigation.goBack())
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={'large'}/>
          <Text style={{color: baseColorDark, textAlign: 'center', marginTop: 10}}>Loading data...</Text>
        </View>
      )
    }
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={[styles.keyText, {fontSize: 40}]}>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.button1, styles.textInput, {color: `${this.state.inputColor}`}]}
          placeholder='Add deck title here'
          onChangeText={text => {
            this.setState({createDeckTitle: text})
            if (this.props.deckNames.includes(text)) {
              this.setState({problem: true, inputColor: redFlagColor})
            } else {
              this.setState({problem: false, inputColor: baseColorDark})
            }
          }}
          />
        {this.state.problem &&
          <Text style={{textAlign: 'center', color: redFlagColor}}>Deck with the provided title already exists</Text>
        }
        <TouchableOpacity
          onPress={this.createDeck}
          disabled={this.state.problem || this.state.createDeckTitle.length === 0}
          style={[styles.button1, styles.button2, styles.shadow, {marginBottom: 150}]}>
          <Text style={{color: baseColorLight}}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

function mapStateToProps({ id, data }) {
  const deckNames = data ? Object.keys(data) : null
  return {
    loading: deckNames ? false : true,
    id,
    deckNames
  }
}

export default connect(mapStateToProps)(AddDeck)