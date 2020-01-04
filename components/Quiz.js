import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import { setUpResults, addCorrect } from '../actions'
import { clearLocalNotifications, setLocalNotification } from '../utils/notification'

import { styles, accentColor1, accentColor3, baseColorLight, redFlagColor } from '../utils/styles'

class Quiz extends Component {

  state = {
    activeQuestionIndex: '',
    activeQuestion: {},
    questionLength: '',
    showAnswer: false
  }

  componentDidMount() {
    this.setState(() => ({
      activeQuestionIndex: 0,
      activeQuestion: this.props.questions[0],
      questionLength: this.props.questions.length
    }))
    if (!this.props.results) {
      this.props.dispatch(setUpResults(this.props.deckName))
    }
  }

  toggleAnswer = () => {
    this.setState({showAnswer: this.state.showAnswer ? false : true})
  }

  addCorrect = () => {
    this.props.dispatch(addCorrect({ deckName: this.props.deckName }))
    this.nextQuestion()
  }

  nextQuestion = () => {
    if (this.state.activeQuestionIndex === this.state.questionLength - 1) {
      this.jumpToResults()
    } else {
      const activeQuestionIndex = this.state.activeQuestionIndex + 1
      this.setState(() => ({
        activeQuestionIndex,
        activeQuestion: this.props.questions[activeQuestionIndex],
        showAnswer: false
      }))
    }
  }

  jumpToResults = () => {
    clearLocalNotifications().then(setLocalNotification())
    this.props.navigation.navigate('DeckResults', { deckName: this.props.deckName })
  }

  render() {
    return (
      <View>

        <TouchableOpacity
          onPress={this.toggleAnswer}
          disabled={this.state.showAnswer}
          style={[styles.button1, styles.shadow, styles.deckContainer, {justifyContent: 'flex-start'}]}>
          <Text
            style={[styles.footNote, {marginBottom: 20}]}>
            Question {this.state.activeQuestionIndex+1} of {this.state.questionLength}</Text>
          <Text style={[styles.keyText, {marginTop: 10, color: accentColor1}]}>
            {this.state.activeQuestion.question}
          </Text>
          {this.state.showAnswer &&
            <Text style={[styles.keyText, {marginTop: 0, marginBottom: 0, color: accentColor3}]}>
              {this.state.activeQuestion.answer}
            </Text>
          }
        </TouchableOpacity>
        {this.state.showAnswer === false &&
          <Text style={styles.footNote}>Tap on question card to see answer</Text>
        }
        {this.state.showAnswer &&
          <View>
            <Text style={[styles.keyText, {marginHorizontal: 10}]}>Whew, that was quite the question! Did you get it right?</Text>
            
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            
              <TouchableOpacity
                onPress={this.addCorrect}
                style={[styles.button1, styles.shadow,
                  {backgroundColor: accentColor3,
                    borderColor: accentColor3,
                    width: 150}]}>
                <Text
                  style={{color: baseColorLight}}>
                    'twas correct!
                </Text>
              </TouchableOpacity>
            
              <TouchableOpacity
                onPress={this.nextQuestion}
                style={[styles.button1, styles.shadow,
                  {backgroundColor: redFlagColor,
                    borderColor: redFlagColor,
                    width: 150}]}>
                <Text
                  style={{color: baseColorLight}}>
                    Nope, missed
                </Text> 
              </TouchableOpacity>
            
            </View>
          </View>
        }

      </View>
    )
  }

}

function mapStateToProps({ data }, { navigation }) {
  const { deckName } = navigation.state.params
  return {
    deckName,
    questions: data[deckName].questions,
    results: data[deckName].results
  }
}

export default connect(mapStateToProps)(Quiz)