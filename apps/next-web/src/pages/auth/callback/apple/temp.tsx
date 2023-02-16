import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useScreenType } from 'lib/utils/useScreenType'
import LoadingSpinnerPage from 'ui/components/LoadingSpinnerPage'
import { APP_BUNDLE_URL } from 'lib/utils/config'

// We only have this page on the web:
// We use this redirect url because apple universal links dont work for HTTP redirects (when the API returns a status code for redirect) but only works if there is an actual navigation happening. Since the POST API that apple calls performs an HTTP redirect it never actually invokes the app. (This comes from the Supertokens backend)
// This page simply navigates to the actual redirect url, which is the /auth/callback page

// Caveat: If your screen size is mobile, we assume that you are using the app.
// Future solution: Supertokens developers are working on refactoring the third party flow a bit that will let you store information in the state being sent to the provider. Once thats done you will be able to read that information in the API layer and that can be used to check if its mobile or web
// But until then we can consider this a workaround

const AppleCallbackTemp = () => {
  const router = useRouter()
  const { code, state } = router.query
  const screenType = useScreenType()
  const isMobile =
    screenType === 'mobile' ||
    screenType === 'smallScreen' ||
    screenType === 'mediumScreen'
  useEffect(() => {
    if (code && state) {
      if (!isMobile) {
        router.push(`/auth/callback/apple?code=${code}&state=${state}`)
      } else
        window.location.href = `${APP_BUNDLE_URL}://auth/callback/apple?code=${code}&state=${state}`
    }
  }, [code, state, router, isMobile])

  return (
    <div>
      <LoadingSpinnerPage />
    </div>
  )
}

export default AppleCallbackTemp
