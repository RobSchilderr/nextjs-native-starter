import React from 'react'
import { PleaseSignIn } from 'ui/components/PleaseSignIn'
import { InitiateLayout } from 'ui/containers/Login/InitiateLayout'
import { ProtectedRoute } from 'ui/containers/ProtectedRoute/ProtectedRoute'

// add the initiate layout to the page
const ProtectedRoutePage = () => (
  <InitiateLayout>
    <PleaseSignIn>
      <ProtectedRoute />
    </PleaseSignIn>
  </InitiateLayout>
)

export default ProtectedRoutePage
