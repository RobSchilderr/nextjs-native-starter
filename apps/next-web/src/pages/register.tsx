import Head from 'next/head'
import React from 'react'
import { RegisterComponent } from 'ui/containers/Register/Register'

const RegisterPage = () => (
  <>
    <Head>
      <title>Sign Up - TaxPal</title>
    </Head>
    <RegisterComponent />
  </>
)

export default RegisterPage
