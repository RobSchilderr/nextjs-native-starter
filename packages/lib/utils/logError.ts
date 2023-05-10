// import { captureException as captureExceptionNextJS } from '@sentry/nextjs'
// import { captureException as captureExceptionCapacitor } from '@sentry/capacitor'
// import { Capacitor } from '@capacitor/core'

// TODO: fix that all Errors are logged as type Error
// TODO: Waiting for sentry cap v5

// type Error = {
//   message: string
//   data?: any
// }

export const logError = (err: any, extra?: Record<string, any>) => {
  if (process.env.NEXT_PUBLIC_APP_STAGE === 'development') {
    console.error(err)
  }

  // if (typeof window !== 'undefined') {
  //   if (Capacitor.isNative) {
  //     captureExceptionCapacitor(err)
  //   } else {
  //     captureExceptionNextJS(err, extra)
  //   }
  }
