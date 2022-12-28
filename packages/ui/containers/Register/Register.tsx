import Head from 'next/head'
import React from 'react'
import { AuthLayout } from 'ui/components/AuthLayout'
import { RegisterForm } from 'ui/containers/Forms/RegisterForm'

export const Register = () => (
  <>
    <Head>
      <title>Sign In - Supertokens</title>
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
      <div className="mt-6">
        <RegisterForm />
      </div>
    </AuthLayout>
  </>
)
