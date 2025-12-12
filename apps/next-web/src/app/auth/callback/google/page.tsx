import { AuthCallback } from 'ui/containers/AuthCallback/AuthCallback'
import React, { Suspense } from 'react'
import LoadingSpinnerPage from 'ui/components/LoadingSpinnerPage'

const GoogleCallback = () => (
  <Suspense fallback={<LoadingSpinnerPage />}>
    <AuthCallback provider="google" />
  </Suspense>
)

export default GoogleCallback
