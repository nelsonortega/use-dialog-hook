import { IAppInitialState } from '../IStoreInterfaces'
import { AppActions, IAppActions } from '../actions/AppActions'

const initialState: IAppInitialState  = {
  dialogConfiguration: {
    show: false,
    message: '',
    buttonText: '',
    close: () => {},
    buttonClick: () => {}
  }
}

const AppReducer = (state: IAppInitialState = initialState, action: IAppActions) => {
  switch (action.type) {
    case AppActions.UPDATE_DIALOG_CONFIGURATION:
      return {
        ...state,
        dialogConfiguration: action.dialogConfiguration
      }
    default:
      return state
  }
}

export default AppReducer