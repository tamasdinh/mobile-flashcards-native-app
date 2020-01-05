# Mobile Flashcards iOS / Android App

## Table of Contents

* [Project Goals](#Project-goals)
* [Getting Started](#Getting-started)
* [Built with](#Built-with)
* [Authors](#Authors)
* [Acknowledgments](#Acknowledgments)

## Project goals

The goal of the project was to build a cross-platform React Native app in which users can define their own study flashcards and use them to quiz themselves.

The key views / functionalities are:
* ```Home```
  - lists all previously defined decks of flashcards with their title and number of flashcards
  - features tab navigation to switch between the list of decks and adding a new deck
* ```Adding a new deck```
  - features a simple text input form for adding a new flashcard deck
  - features form control: the user cannot submit an empty title or one that already exists
* ```Deck details```
  - shows the title of the deck and the number of cards in it
  - user can add a card, start a quiz or delete the deck
* ```Add card```
  - user can add a new card to the selected deck
* ```Quiz```
  - the app takes the user through all the flashcards
  - the user can flip the question card to see the answer
  - the user can indicate whether he/she knew the answer or not, via buttons
  - the app counts the number of correct answers
  - the user can quit the quiz any time by using the Back button
* ```Results```
  - shown at the end of the ```Quiz```, it calculated the number of correct answers and shows it to the user
  - features a button to relaunch the quiz and a button to return to the ```Deck details``` page
* ```Delete a deck```
  - when the user initiates the deletion of a deck, the app brings him/her to this screen
  - the screen maked the user confirm the deletion intention
  - the user can ```Cancel``` or confirm deletion

## Getting Started

Given that the project was bootstrapped with ```create-react-native-app```, it can be easily set up on your local machine. You can easily clone the contents of the repo by running

```git clone https://github.com/tamasdinh/mobile-flashcards-native-app.git```

in your command line. This will download the entire repository to your computer, into a subfolder named ```mobile-flashcards-native-app``` in the folder from which you initiated cloning. Alternatively, you can download the repo as a ```zip``` file from the repo page.

You may have to install the ```expo cli``` to be able to package and review the app on your phone. This you can achieve by ```npm install -g expo-cli```.

Once you have the repo, you can just run ```npm install``` and subsequently, ```npm start``` and the app will automatically install dependencies and start the development server. From there you can check out app functionality.

## Built With

* [React Native](https://reactjs.org) - An excellent, state-based UI framework for Javascript, developed and open-sourced by the Facebook UI Team
* [Expo](https://expo.io) - The fantastic toolchain that converts your Javascript code to native code and provides the development server with which you can hot-reload to your own mobile device wirelessly.
* [React Navigation](https://reactnavigation.org) - Feature-rich native routing library, specifically designed for ```React Native```
* [Redux](https://redux.js.org) - A Predictable State Container for JS Apps

## Authors

* **Tamas Dinh** - [LinkedIn profile](https://www.linkedin.com/in/tamasdinh/)


## Acknowledgments

I would like to thank everyone working on the React Native, Expo and Redux projects for doing what they do. I think what you are doing is awesome and it will lead to a bright future for all of us.

I would like to thank the course tutors for putting together this wonderful course on React Native. It truly fits into a nice open-source tech stack and I am so happy I could get myself acquainted with this solution so fast and so efficiently.
