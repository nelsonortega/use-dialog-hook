import React from 'react'
import { createStore } from 'redux'
import Dialog from './components/Dialog'
import MainScreen from './screens/MainScreen'
import { mainReducer } from './store/RootReducer'
import { Provider as StoreProvider } from 'react-redux'
import { DefaultTheme, Portal, Provider as PaperProvider } from 'react-native-paper'

const store = createStore(mainReducer)

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    placeholder: '#FFFFFF', text: '#FFFFFF', primary: '#FFFFFF'
  }
}

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Portal>
          <Dialog />
        </Portal>
        <MainScreen />
      </PaperProvider>
    </StoreProvider>
  )
}

export default App