import Head from 'next/head'
import React from 'react'
import { Register } from 'ui/containers/Register/Register'

const RegisterPage = () => (
  <>
    <Head>
      <title>Sign Up - TaxPal</title>
    </Head>
    <Register />
  </>
)

export default RegisterPage
