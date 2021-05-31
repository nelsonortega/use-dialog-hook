import { initialState } from '../AppInitialState'
import { AppActions } from '../actions/AppActions'
import { IAppActions } from '../../interfaces/IAppActions'
import { IAppInitialState } from '../../interfaces/IAppInitialState'

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