import { IDialogConfiguration } from "../../interfaces/IDialogConfiguration"

export enum AppActions {
  UPDATE_DIALOG_CONFIGURATION = 'UPDATE_DIALOG_CONFIGURATION'
}

export const updateDialogConfiguration = (dialogConfiguration: IDialogConfiguration) => {
  return {
    type: AppActions.UPDATE_DIALOG_CONFIGURATION,
    dialogConfiguration
  }
}