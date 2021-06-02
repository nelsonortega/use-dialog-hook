import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

interface IButtonProps {
  text: string
  onPress: Function
  loading?: boolean
  type: ButtonTypes
}

export enum ButtonTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

const Button = (props: IButtonProps) => {
  const isPrimary = props.type === ButtonTypes.PRIMARY

  const onPress = () => {
    props.onPress()
  }

  return (
    <PaperButton 
      onPress={onPress}
      loading={props.loading}
      disabled={props.loading}
      dark={isPrimary ? true : false}
      mode={isPrimary ? 'contained' : 'text'} 
      color={isPrimary ? '#0073E7' : undefined} 
      style={isPrimary ? styles.button : styles.secondaryButton} 
    >
      {props.text}
    </PaperButton>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    justifyContent: 'center'
  },
  secondaryButton: {
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center'
  }
})

export default Button