// COLORS
export const baseColorDark = '#333'
export const baseColorLight = '#fff'
export const baseColorMedium = '#999'
export const accentColor1 = '#f26f28'
export const accentColor2 = '#4e4cb8'
export const accentColor3 = '#45A35B'
export const redFlagColor = '#b71845'

export const purple = '#292477'
export const gray = '#757575'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'


// STYLES
import { StyleSheet, Dimensions } from 'react-native'

const devParams = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  deckContainer: {
    paddingVertical: 50,
    marginHorizontal: 0.1 * devParams.width
  },
  button1: {
    backgroundColor: baseColorLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: baseColorDark,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 0.2 * devParams.width
  },
  button2: {
    backgroundColor: baseColorDark,
    color: baseColorLight,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowColor: baseColorDark
  },
  keyText: {
    color: baseColorDark,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  flaggedText: {
    color: redFlagColor,
    fontWeight: 'bold'
  },
  textInput: {
    marginHorizontal: 0.1 * devParams.width
  },
  footNote: {
    fontSize: 13,
    color: baseColorMedium,
    textAlign: 'center',
    fontStyle: 'italic'
  }
})