// import dynamic from 'next/dynamic'
import React from 'react'
import { PleaseSignIn } from 'ui/components/PleaseSignIn'
import { Home } from 'ui/containers/Home/Home'

// const InitiateLayout = dynamic(
//   () =>
//     import('ui/containers/Login/InitiateLayout').then(
//       mod => mod.InitiateLayout,
//     ),
//   { ssr: false },
// )
// add the initiate layout to the page
const HomePage = () => (
  <PleaseSignIn>
    <Home />
  </PleaseSignIn>
)

export default HomePage
