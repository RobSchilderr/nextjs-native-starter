import Head from 'next/head'
import React from 'react'
import { LoginForm } from 'ui/containers/Forms/LoginForm'
import { AuthLayout } from 'ui/components/AuthLayout'

export const Login = () => (
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Or{' '}
            <a
              href="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              go to register{' '}
            </a>{' '}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <LoginForm />
      </div>
    </AuthLayout>
  </>
)
