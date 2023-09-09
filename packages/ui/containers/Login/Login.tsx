import { useState } from 'react'
import Head from 'next/head'
import { AUTH_MODE } from 'lib/utils/config'
import { onThirdPartyLogin } from 'lib/utils/supertokensUtilities'
import { usePlatform } from 'lib/utils/capacitor'
import Link from 'next/link'
import {
  EmailPasswordLoginForm,
  LoginForm,
  PasswordlessLoginForm,
} from 'ui/containers/Forms/LoginForm'
import { AuthLayout } from 'ui/components/AuthLayout'
import { AppleButton, GoogleButton } from '../../components/SocialButtons'
import TextDivider from '../../components/TextDivider'

const ThirdPartyEmailPasswordLogin = () => {
  const platform = usePlatform()
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col px-4 sm:[x-">
          {/* make some nice title with Tailwind here in the middle of the screen */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <div>
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
              <TextDivider text="Or" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <LoginForm />
        </div>
      </AuthLayout>
    </>
  )
}

const EmailPasswordLogin = () => {
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <p className="mt-2 text-sm text-gray-700">
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Go back to home{' '}
            </Link>{' '}
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Or{' '}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                create a new account{' '}
              </Link>{' '}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <EmailPasswordLoginForm />
        </div>
      </AuthLayout>
    </>
  )
}

const ThirdPartyLogin = () => {
  const platform = usePlatform()

  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex items-center  flex-row mt-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-4xl mx-auto font-display font-bold text-gray-900 "
          >
            NextJs Native
          </Link>
        </div>

        <div className="mt-8">
          <div>
            <div>
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
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

const PasswordlessLogin = () => {
  const [hasRequestedCode, setHasRequestedCode] = useState(false)
  const [isGettingCode, setIsGettingCode] = useState<boolean>(false)

  const onChangeEmail = () => {
    setHasRequestedCode(false)
    setIsGettingCode(false)
  }
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex items-center  flex-row mt-6 px-4 sm:px-6 lg:px-8">
          {hasRequestedCode && (
            <button
              className="text-blue-600 w-8"
              type="button"
              onClick={onChangeEmail}
            >
              Back
            </button>
          )}
          <Link
            href="/"
            className="text-4xl mx-auto font-display font-bold text-gray-900 "
          >
            NextJs Native
          </Link>
          {/* // dummy link to make the logo centered */}
          {hasRequestedCode && <div className="w-8"></div>}
        </div>

        <div className="mt-8 px-4  text-center mx-auto">
          {!hasRequestedCode && (
            <h2 className="text-2xl  text-gray-900">Enter your email</h2>
          )}
          {hasRequestedCode && (
            <h2 className="text-md text-gray-900">
              Enter the code that is sent to your email
            </h2>
          )}
        </div>
        <div className="mt-8">
          <PasswordlessLoginForm
            isGettingCode={isGettingCode}
            setIsGettingCode={setIsGettingCode}
            hasRequestedCode={hasRequestedCode}
            setHasRequestedCode={setHasRequestedCode}
          />
        </div>
      </AuthLayout>
    </>
  )
}

const ThirdPartyPasswordlessLogin = () => {
  const platform = usePlatform()
  const [hasRequestedCode, setHasRequestedCode] = useState(false)
  const [isGettingCode, setIsGettingCode] = useState<boolean>(false)

  const onChangeEmail = () => {
    setHasRequestedCode(false)
    setIsGettingCode(false)
  }

  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className={`flex flex-col justify-center max-w-7xl mx-auto`}>
          <div className="flex items-center  flex-row mt-6 px-4 sm:px-6 lg:px-8">
            {hasRequestedCode && (
              <button
                className="text-blue-600 w-8"
                type="button"
                onClick={onChangeEmail}
              >
                Back
              </button>
            )}
            <Link
              href="/"
              className="text-4xl mx-auto font-display font-bold text-gray-900 "
            >
              NextJs Native
            </Link>
            {/* // dummy link to make the logo centered */}
            {hasRequestedCode && <div className="w-8"></div>}
          </div>

          <div className="mt-8 px-4  mx-auto">
            {!hasRequestedCode && (
              <h2 className="text-2xl  text-gray-900">Enter your email</h2>
            )}
            {hasRequestedCode && (
              <h2 className="text-md text-gray-900">
                Enter the code that is sent to your email
              </h2>
            )}
          </div>
        </div>

        <div className="mt-8 px-4 mx-auto">
          <div>
            <div>
              <div className="mt-6">
                <PasswordlessLoginForm
                  isGettingCode={isGettingCode}
                  setIsGettingCode={setIsGettingCode}
                  hasRequestedCode={hasRequestedCode}
                  setHasRequestedCode={setHasRequestedCode}
                />
              </div>

              {!hasRequestedCode && (
                <div>
                  <div className="my-10 mt-4">
                    <TextDivider text="Or" />
                  </div>

                  <div className="flex flex-col mt-0 space-y-8">
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
              )}
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export const LoginComponent = () => {
  if (AUTH_MODE === 'emailpassword') {
    return <EmailPasswordLogin />
  }

  if (AUTH_MODE === 'thirdparty') {
    return <ThirdPartyLogin />
  }

  if (AUTH_MODE === 'passwordless') {
    return <PasswordlessLogin />
  }

  if (AUTH_MODE === 'thirdpartypasswordless') {
    return <ThirdPartyPasswordlessLogin />
  }

  return <ThirdPartyEmailPasswordLogin />
}
