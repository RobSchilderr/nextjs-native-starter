import {
  useConfirmModalStore,
  ConfirmModalState,
} from 'lib/hooks/useConfirmModalStore'
import { Button } from 'ui/components/Button'
import { Modal } from 'ui/components/Modal'
import { ButtonText } from '../ButtonText'

export const modalConfirm = ({
  message,
  onConfirmText,
  onConfirm,
  onCancelText,
  buttonColor,
  children,
}: ConfirmModalState) => {
  useConfirmModalStore.getState().set({
    onConfirm,
    message,
    onConfirmText,
    onCancelText,
    buttonColor,
    children,
  })
}

export const ConfirmModal = () => {
  const {
    buttonColor,
    onConfirm,
    onCancelText,
    onConfirmText,
    message,
    close,
    children,
  } = useConfirmModalStore()
  return (
    <Modal isOpen={!!onConfirm} onClose={() => close()}>
      <div className="flex flex-col">
        <div className="prose flex text-gray-800">{message}</div>
        <div>{children}</div>

        <div className="mt-6 flex items-center">
          <Button
            onClick={() => {
              close()
              onConfirm?.()
            }}
            color={buttonColor}
            type="submit"
          >
            {onConfirmText}
          </Button>
          <ButtonText
            type="button"
            buttonTextClassnames="buttonTextNeutral"
            onClick={close}
            className="ml-4"
          >
            {onCancelText}
          </ButtonText>
        </div>
      </div>
    </Modal>
  )
}
