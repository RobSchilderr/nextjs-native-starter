import { AuthCallback } from 'ui/containers/AuthCallback/AuthCallback'
import React, { Suspense } from 'react'
import LoadingSpinnerPage from 'ui/components/LoadingSpinnerPage'

const AppleCallback = () => (
  <Suspense fallback={<LoadingSpinnerPage />}>
    <AuthCallback provider="apple" />
  </Suspense>
)

export default AppleCallback
