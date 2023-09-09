import dynamic from 'next/dynamic'
import React from 'react'
import { PleaseSignIn } from 'ui/components/PleaseSignIn'
import { Settings } from 'ui/containers/Settings/Settings'

const InitiateLayout = dynamic(
  () =>
    import('ui/containers/Login/InitiateLayout').then(
      mod => mod.InitiateLayout,
    ),
  { ssr: false },
)
const SettingsPage = () => (
  <InitiateLayout>
    <PleaseSignIn>
      <Settings />
    </PleaseSignIn>
  </InitiateLayout>
)

export default SettingsPage
