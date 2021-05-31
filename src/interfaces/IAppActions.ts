import { AppActions } from '../store/actions/AppActions'
import { IDialogConfiguration } from './IDialogConfiguration'

export interface DialogConfiguration {
  type: AppActions.UPDATE_DIALOG_CONFIGURATION
  dialogConfiguration: IDialogConfiguration
}

export type IAppActions = DialogConfiguration