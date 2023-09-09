import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { cn } from 'lib/utils/util'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  icon?: JSX.Element
  children: React.ReactNode
  modalTitle?: string
  modalDescription?: string
  className?: string
  customDialogPanel?: boolean
}
export const Modal = ({
  isOpen,
  onClose,
  children,
  icon,
  modalDescription,
  modalTitle,
  customDialogPanel = false,
  className = '',
}: ModalProps) => (
  <Transition.Root show={isOpen} as={Fragment} unmount>
    <Dialog as="div" className={` relative z-50 `} onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex min-h-full items-center justify-center  p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {customDialogPanel ? (
              children
            ) : (
              <Dialog.Panel
                className={cn(
                  className,
                  `relative w-full transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6`,
                )}
              >
                <button
                  onClick={onClose}
                  type="button"
                  className="absolute right-4 top-4 "
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="mt-2">
                      {icon && (
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                          {icon}
                        </div>
                      )}
                      <div className="mt-3 text-center sm:mt-5">
                        {modalTitle && (
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            {modalTitle}
                          </Dialog.Title>
                        )}

                        {modalDescription && (
                          <div className="mt-1">
                            <p className="text-sm text-gray-500">
                              {modalDescription}
                            </p>
                          </div>
                        )}
                      </div>

                      {children}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            )}
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)
