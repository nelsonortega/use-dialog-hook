import { useDispatch } from 'react-redux'
import { IDialogConfiguration } from '../store/IStoreInterfaces'
import { updateDialogConfiguration } from '../store/actions/AppActions'

export const closedDialogConfiguration: IDialogConfiguration = {
  show: false,
  message: '',
  buttonText: '',
  close: () => {},
  buttonClick: () => {}
}

const useDialog = (configuration: string | IDialogConfiguration): () => void => {
  const dispatch = useDispatch()

  const closeDialog = () => {
    dispatch(updateDialogConfiguration(closedDialogConfiguration))
  }

  const openDialog = () => {
    const dialog: IDialogConfiguration = {
      show: true,
      message: typeof configuration === 'string' ? configuration : '',
      buttonText: 'Close',
      close: closeDialog,
      buttonClick: closeDialog
    }

    dispatch(updateDialogConfiguration(typeof configuration === 'string' ? dialog : configuration))
  }

  return openDialog
}

export default useDialog