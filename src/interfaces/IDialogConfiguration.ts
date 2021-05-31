export interface IDialogConfiguration {
  show: boolean
  close: Function
  message: string
  buttonText: string
  buttonClick: Function
  secondaryButtonText?: string
  secondaryButtonClick?: Function
}