import React from 'react'
import { useSelector } from 'react-redux'
import ShowComponent from './ShowComponent'
import Button, { ButtonTypes } from './Button'
import { StyleSheet, View } from 'react-native'
import { IRootState } from '../store/RootReducer'
import { Text, Dialog as PaperDialog } from 'react-native-paper'

const Dialog = () => {
  const dialogConfiguration = useSelector((state: IRootState) => state.App.dialogConfiguration)

  const close = () => {
    dialogConfiguration.close()
  }

  const buttonPress = () => {
    dialogConfiguration.buttonClick()
  }

  const secondaryButtonPress = () => {
    if (dialogConfiguration.secondaryButtonClick !== undefined)
      dialogConfiguration.secondaryButtonClick()
    else 
      dialogConfiguration.close()
  }

  return (
    <PaperDialog visible={dialogConfiguration.show} onDismiss={close} style={styles.contentContainer}>
      <Text style={styles.message}>{dialogConfiguration.message}</Text>

      <View style={styles.buttonContainer}>
        <Button 
          onPress={buttonPress}
          type={ButtonTypes.PRIMARY} 
          text={dialogConfiguration.buttonText} 
        />
        <ShowComponent show={dialogConfiguration.secondaryButtonText !== undefined}>
          <Button 
            onPress={secondaryButtonPress}
            type={ButtonTypes.SECONDARY} 
            text={dialogConfiguration.secondaryButtonText || ''} 
          />
        </ShowComponent>
      </View>
    </PaperDialog>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    backgroundColor: '#2E3F47'
  },
  message: {
    fontSize: 16,
    marginBottom: 25
  },
  buttonContainer: {
    display: 'flex',
    marginLeft: 'auto',
    flexDirection: 'row'
  }
})

export default Dialog