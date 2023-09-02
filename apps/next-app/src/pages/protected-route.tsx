import React from 'react'
import { PleaseSignIn } from 'ui/components/PleaseSignIn'
import { InitiateLayout } from 'ui/containers/Login/InitiateLayout'
import { ProtectedRoute } from 'ui/containers/ProtectedRoute/ProtectedRoute'

const ProtectedRoutePage = () => (
  <InitiateLayout>
    <PleaseSignIn>
      <ProtectedRoute />
    </PleaseSignIn>
  </InitiateLayout>
)

export default ProtectedRoutePage
