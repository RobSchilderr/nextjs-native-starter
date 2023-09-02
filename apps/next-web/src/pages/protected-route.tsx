import dynamic from 'next/dynamic'
import React from 'react'
import { PleaseSignIn } from 'ui/components/PleaseSignIn'
import { ProtectedRoute } from 'ui/containers/ProtectedRoute/ProtectedRoute'

const InitiateLayout = dynamic(
  () =>
    import('ui/containers/Login/InitiateLayout').then(
      mod => mod.InitiateLayout,
    ),
  { ssr: false },
)
// add the initiate layout to the page
const ProtectedRoutePage = () => (
  <InitiateLayout>
    <PleaseSignIn>
      <ProtectedRoute />
    </PleaseSignIn>
  </InitiateLayout>
)

export default ProtectedRoutePage
