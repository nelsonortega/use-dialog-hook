import React from 'react'
import { createStore } from 'redux'
import { mainReducer } from './store/RootReducer'
import { StyleSheet, Text, View } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'

const store = createStore(mainReducer)

const App = () => {
  return (
    <StoreProvider store={store}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App