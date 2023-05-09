import { QueryClient } from '@tanstack/react-query'
import { logError } from 'lib/utils/logError'
import { toastError } from 'ui/components/Toast/toast'

function isHasuraError(obj: unknown): obj is { message: string } {
  return typeof obj === 'object' && obj !== null && 'message' in obj
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 48, // 48 hours
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      onError: error => {
        if (isHasuraError(error)) {
          toastError(error.message)
        } else {
          toastError('Something went wrong')
        }
        logError(error)
      },
    },
  },
})
