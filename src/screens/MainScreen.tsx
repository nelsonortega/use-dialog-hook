import React from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import Button, { ButtonTypes } from '../components/Button'
import { IDialogConfiguration } from '../store/IStoreInterfaces'
import { updateDialogConfiguration } from '../store/actions/AppActions'
import useDialog, { closedDialogConfiguration } from '../hooks/useDialog'

const MainScreen = () => {
  const dispatch = useDispatch()

  const openTextDialog = () => {
    textDialog()
  }

  const openCustomDialog = () => {
    customDialog()
  }

  const customDialogClose = () => {
    dispatch(updateDialogConfiguration(closedDialogConfiguration))
  }

  const customDialogSecondaryClick = () => {
    console.log('Custom button')
  }

  const customDialogConfiguration: IDialogConfiguration = {
    show: true,
    close: customDialogClose,
    message: 'This is a custom dialog',
    buttonText: 'Ok!',
    buttonClick: customDialogClose,
    secondaryButtonText: 'Click me',
    secondaryButtonClick: customDialogSecondaryClick
  }

  const customDialog = useDialog(customDialogConfiguration)
  const textDialog = useDialog('Dialog created with text only')

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button 
          onPress={openTextDialog}
          text={'Text Dialog'}
          type={ButtonTypes.PRIMARY}
        />
      </View>
      <Button 
        text={'Custom Dialog'}
        type={ButtonTypes.PRIMARY}
        onPress={openCustomDialog}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginBottom: 20
  }
})

export default MainScreen