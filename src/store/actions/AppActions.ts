import { IDialogConfiguration } from "../IStoreInterfaces"

export enum AppActions {
  UPDATE_DIALOG_CONFIGURATION = 'UPDATE_DIALOG_CONFIGURATION'
}

interface DialogConfiguration {
  type: AppActions.UPDATE_DIALOG_CONFIGURATION
  dialogConfiguration: IDialogConfiguration
}

export const updateDialogConfiguration = (dialogConfiguration: IDialogConfiguration) => {
  return {
    type: AppActions.UPDATE_DIALOG_CONFIGURATION,
    dialogConfiguration
  }
}

export type IAppActions = DialogConfiguration