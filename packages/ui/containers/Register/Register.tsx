import Head from 'next/head'
import React from 'react'
import { AuthLayout } from 'ui/components/AuthLayout'
import { RegisterForm } from 'ui/containers/Forms/RegisterForm'
import TextDivider from 'ui/components/TextDivider'
import { AppleButton, GoogleButton } from '../../components/SocialButtons'
import { onThirdPartyLogin } from 'lib/utils/supertokensUtilities'
import { usePlatform } from 'lib/utils/capacitor'

export const Register = () => {
  const platform = usePlatform()
  return (
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

        <div className="mt-8">
          <div>
            <div>
              <p className="text-sm font-medium text-gray-700">Register with</p>
              <div className="flex flex-col mt-2 space-y-6">
                <GoogleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'google',
                      platform,
                    })
                  }
                />
                <AppleButton
                  onClick={() =>
                    onThirdPartyLogin({
                      provider: 'apple',
                      platform,
                    })
                  }
                />
              </div>
            </div>

            <div className="mt-6">
              <TextDivider text="Or register with" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <RegisterForm />
        </div>
      </AuthLayout>
    </>
  )
}
