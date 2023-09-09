import { create } from 'zustand'

import { combine } from 'zustand/middleware'

type Fn = () => void
type AsyncFn = () => Promise<void>

export const buttonColorClassnames = {
  primary:
    'text-white font-semibold bg-blue-600 rounded-md border border-transparent hover:bg-green-500 focus:ring-blue-500  ',
  error:
    'text-white bg-red-600 rounded-md border border-transparent hover:bg-red-700 focus:ring-red-500',
  secondary:
    'text-gray-700 bg-white border border-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-blue-500',
  //   'secondary-800': 'text-button bg-primary-800 hover:bg-primary-600 disabled:text-primary-300',
  transparent:
    'text-button border bg-transparent text-button bg-white hover:bg-gray-50',
  delete:
    'text-white bg-red-600 rounded-md border border-transparent hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2  ',
}

export type ConfirmModalState = {
  message: string
  onConfirm: undefined | Fn | AsyncFn
  onCancelText: string
  onConfirmText: string
  buttonColor: keyof typeof buttonColorClassnames
  children?: React.ReactNode
}

const getDefaultValues = (): ConfirmModalState => ({
  message: '',
  onConfirm: undefined,
  onCancelText: 'Annuleren',
  onConfirmText: '',
  buttonColor: 'primary',
  children: undefined,
})

export const useConfirmModalStore = create(
  combine(getDefaultValues(), set => ({
    close: () =>
      set({
        onConfirm: undefined,
        message: '',
        onConfirmText: '',
        onCancelText: '',
        buttonColor: 'primary',
        children: undefined,
      }),
    set,
  })),
)
