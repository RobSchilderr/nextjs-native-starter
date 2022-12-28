import Head from 'next/head'
import React from 'react'

import { AuthLayout } from 'ui/components/AuthLayout'
import { Button } from 'ui/components/Button'
import { TextField } from 'ui/components/Fields'

const Login = () => (
  <>
    <Head>
      <title>Sign In - TaxPal</title>
    </Head>
    <AuthLayout>
      <div className="flex flex-col">
        <p className="mt-2 text-sm text-gray-700">
          <a href="/" className="font-medium text-blue-600 hover:underline">
            Go back to home{' '}
          </a>{' '}
        </p>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            <a
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Go to register{' '}
            </a>{' '}
          </p>
        </div>
      </div>
      <form action="#" className="grid grid-cols-1 mt-10 gap-y-8">
        <TextField
          label="Email address"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </AuthLayout>
  </>
)

export default Login
