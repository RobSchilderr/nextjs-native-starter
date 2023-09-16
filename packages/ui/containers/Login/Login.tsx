import { MouseEventHandler, useState } from 'react'
import Head from 'next/head'
import { AUTH_MODE } from 'lib/utils/config'
import { usePlatform } from 'lib/utils/capacitor'
import Link from 'next/link'
import {
  EmailPasswordLoginForm,
  LoginForm,
  PasswordlessLoginForm,
} from 'ui/containers/Forms/LoginForm'
import { AuthLayout, AuthLogo } from 'ui/components/AuthLayout'
import TextDivider from '../../components/TextDivider'
import { StackedSocialButtons } from './StackedSocialButtons'

type HeaderWithBackButtonProps = {
  hasRequestedCode: boolean
  onChangeEmail: MouseEventHandler<HTMLButtonElement>
}

const HeaderWithBackButton = ({
  hasRequestedCode,
  onChangeEmail,
}: HeaderWithBackButtonProps) => (
  <>
    {hasRequestedCode && (
      <button
        className="text-orange-600 w-6"
        type="button"
        onClick={onChangeEmail}
      >
        &#8592;
      </button>
    )}
    <div className="mx-auto">
      <AuthLogo />
    </div>

    {/* // dummy link to make the logo centered */}
    {hasRequestedCode && <div className="w-6" />}
  </>
)

const ThirdPartyEmailPasswordLogin = () => {
  const platform = usePlatform()
  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col px-4 sm:[x-">
          <div className="mt-8 mx-auto">
            <AuthLogo />
          </div>
        </div>

        <div className="mt-8">
          <div>
            <div>
              <StackedSocialButtons
                buttons={['google', 'apple']}
                platform={platform}
              />
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

const EmailPasswordLogin = () => (
  <>
    <Head>
      <title>Sign In - Supertokens</title>
    </Head>
    <AuthLayout>
      <div className="flex flex-col">
        <p className="mt-2 text-sm text-gray-700">
          <Link href="/" className=" text-orange-600 hover:underline">
            Go back to home{' '}
          </Link>{' '}
        </p>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Or{' '}
            <Link href="/register" className=" text-orange-600 hover:underline">
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

const ThirdPartyLogin = () => {
  const platform = usePlatform()

  return (
    <>
      <Head>
        <title>Sign In - Supertokens</title>
      </Head>
      <AuthLayout>
        <div className="flex items-center  flex-row mt-6 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <AuthLogo />
          </div>
        </div>

        <div className="mt-8">
          <div>
            <div>
              <StackedSocialButtons
                buttons={['google', 'apple', 'github']}
                platform={platform}
              />
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
          <HeaderWithBackButton
            hasRequestedCode={hasRequestedCode}
            onChangeEmail={onChangeEmail}
          />
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
        <div className="flex flex-col justify-center max-w-7xl mx-auto">
          <div className="flex items-center flex-row mt-6 px-4 sm:px-6 lg:px-8">
            <HeaderWithBackButton
              hasRequestedCode={hasRequestedCode}
              onChangeEmail={onChangeEmail}
            />
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

        <div className="mt-8 md:w-96 px-4 mx-auto">
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
                  <StackedSocialButtons
                    buttons={['google', 'apple']}
                    platform={platform}
                  />{' '}
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
