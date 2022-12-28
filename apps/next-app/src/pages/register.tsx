import Head from 'next/head'
import React from 'react'
import { AuthLayout } from 'ui/components/AuthLayout'
import { Button } from 'ui/components/Button'
import { TextField } from 'ui/components/Fields'

const Register = () => (
  <>
    <Head>
      <title>Sign Up - TaxPal</title>
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
            Get started for free
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Already registered?{' '}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </a>{' '}
            to your account.
          </p>
        </div>
      </div>
      <form
        action="#"
        className="grid grid-cols-1 mt-10 gap-y-8 gap-x-6 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Email address"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
        />

        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </AuthLayout>
  </>
)

export default Register
