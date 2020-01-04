import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Constants from 'expo-constants'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { styles, baseColorDark, baseColorLight, accentColor1, redFlagColor, accentColor2, accentColor3 } from './utils/styles'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import DeleteDeck from './components/DeleteDeck'
import Quiz from './components/Quiz'
import DeckResults from './components/DeckResults'
import { setLocalNotification } from './utils/notification'

function CustomStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const BottomTabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => (
        Platform.OS === 'ios'
          ? <Ionicons name='ios-browsers' size={30} color={tintColor} />
          : <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
          )
        }
      },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => (
        Platform.OS === 'ios'
        ? <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
        : <MaterialCommunityIcons name='account-card-details' size={30} color={tintColor} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? baseColorLight : baseColorDark,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? baseColorDark: baseColorLight,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const AppStack = createStackNavigator({
  Decks: {
    screen: BottomTabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: baseColorLight,
      headerStyle: {
        backgroundColor: baseColorDark
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: accentColor1,
      headerStyle: {
        backgroundColor: baseColorLight
      },
      title: 'Add new card'
    }
  },
  DeleteDeck: {
    screen: DeleteDeck,
    navigationOptions: {
      headerTintColor: redFlagColor,
      headerStyle: {
        backgroundColor: baseColorLight
      },
      title: 'Delete deck'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: accentColor2,
      headerStyle: {
        backgroundColor: baseColorLight
      },
      title: 'Quiz time!'
    }
  },
})

const ResultStack = createStackNavigator({
  DeckResults: {
    screen: DeckResults,
    navigationOptions: {
      headerTintColor: accentColor3,
      headerStyle: {
        backgroundColor: baseColorLight
      },
      title: 'Results'
    }
  }
})

const NavContainer = createAppContainer(
  createSwitchNavigator({
      App: AppStack,
      Results: ResultStack
    },
    { initialRouteName: 'App'}
  )
)

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={baseColorDark} barStyle='light-content'/>
          <NavContainer />
        </View>
      </Provider>
    )
  }
}