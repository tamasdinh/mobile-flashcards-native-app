import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Constants from 'expo-constants'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import { darkGrey, white } from './utils/colors'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'

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
    activeTintColor: Platform.OS === 'ios' ? white : darkGrey,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? darkGrey: white,
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

const StackNavigator = createStackNavigator({
  Decks: {
    screen: BottomTabs
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkGrey
      }
    }
  }
})

const NavContainer = createAppContainer(StackNavigator)

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={darkGrey} barStyle='light-content'/>
          <NavContainer />
        </View>
      </Provider>
    )
  }
}