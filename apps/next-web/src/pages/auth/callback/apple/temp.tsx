/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useScreenType } from 'lib/utils/useScreenType'
import LoadingSpinnerPage from 'ui/components/LoadingSpinnerPage'
import { APP_BUNDLE_URL } from 'lib/utils/config'

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
