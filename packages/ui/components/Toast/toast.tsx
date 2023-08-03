import { toast, ToastOptions } from 'react-hot-toast'

const toastOptions: ToastOptions = {
  duration: 4000,
  style: {
    marginTop: 'env(safe-area-inset-top)',
  },
}

export const toastError = (msg: string, options?: ToastOptions): string =>
  toast.error(msg, { ...toastOptions, duration: 9000, ...options })

export const toastSuccess = (msg: string, options?: ToastOptions): string =>
  toast.success(msg, { ...toastOptions, ...options })

export const toastDanger = (msg: string, options?: ToastOptions): string =>
  toast.error(msg, {
    ...toastOptions,
    ...options,
    icon: '🚨',
    style: {
      background: '#fb923c',
      color: '#fff',
      marginTop: 'env(safe-area-inset-top)',

    },
  })

export const toastCustom = (msg: string, options?: ToastOptions): string =>
  toast.custom(msg, { ...toastOptions, ...options })

export const custom = (
  {
    title,
    description,
    icon,
    onClick,
  }: { title: string; description: string; onClick?: () => void; icon: JSX.Element | string | null },
  options?: ToastOptions,
) =>
  toast.custom(
    t => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <button
          type='button'
          onClick={() => {
            onClick?.()
            toast.dismiss(t.id)
          }}
          className='w-0 flex-1 p-4'
        >
          <div className='flex items-start'>
            <div className='flex-shrink-0 pt-0.5'>{icon}</div>
            <div className='ml-3 flex-1'>
              <p className='text-sm font-medium text-gray-900'>{title}</p>
              <div className='mt-1 text-sm text-gray-500' dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </button>
        <div className='flex border-l border-gray-200'>
          <button
            type='button'
            onClick={() => {
              toast.dismiss(t.id)
            }}
            className='flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500'
          >
            Sluiten
          </button>
        </div>
      </div>
    ),
    {
      ...options,
    },
  )
