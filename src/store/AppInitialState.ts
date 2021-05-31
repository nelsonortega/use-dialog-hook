import { IAppInitialState } from '../interfaces/IAppInitialState'
import { IDialogConfiguration } from '../interfaces/IDialogConfiguration'

const initialDialogConfiguration: IDialogConfiguration = {
  show: false,
  message: '',
  buttonText: '',
  close: () => {},
  buttonClick: () => {}
}

export const initialState: IAppInitialState  = {
  dialogConfiguration: initialDialogConfiguration
}