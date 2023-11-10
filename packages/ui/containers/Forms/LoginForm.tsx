'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { emailPasswordSignIn } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import { doesSessionExist } from 'supertokens-auth-react/recipe/session'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
import {
  consumePasswordlessCode,
  createPasswordlessCode,
} from 'lib/utils/supertokensUtilities'
import { Button } from 'ui/components/Button'
import { Spinner } from '../../components/ButtonSpinner'
import InputErrorMsg from '../../components/InputErrorMsg'

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export type LoginFormVariables = {
  email: string
  password: string
}

export const LoginForm = ({ redirectUri }: { redirectUri?: string }) => {
  const router = useRouter()

  //   const refreshUser = useRefreshUser()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormVariables>({
    mode: 'onBlur',
  })

  const onSubmit = async ({ email, password }: LoginFormVariables) => {
    const emailLowerCase = email.toLocaleLowerCase().trim()
    // const previousPath = await getPreviousPath()

    // console.log({ pref: previousPath })
    const response = await emailPasswordSignIn({
      formFields: [
        {
          id: 'email',
          value: emailLowerCase,
        },
        {
          id: 'password',
          value: password,
        },
      ],
    })

    const validSession = await doesSessionExist()
    console.log({ validSession }, 'valid')
    console.log({ response })

    if (!response || response.status !== 'OK') {
      setError('password', {
        message: 'Gebruikersnaam of wachtwoord is incorrect',
      })
      setError('email', {
        message: 'Gebruikersnaam of wachtwoord is incorrect',
      })

      return
    }

    // await refreshUser()

    if (redirectUri) {
      router.push(redirectUri)
      return
    }

    // if you want to redirect to the previous page after login, comment this out and make sure to add the previouspath:
    // if (
    //   previousPath &&
    //   previousPath !== 'null' &&
    //   ![...authPages, '/'].includes(previousPath)
    // ) {
    //   router.push(previousPath)
    //   return
    // }

    // if (nativeOS === 'ios' && password) {
    //   await SavePassword.promptDialog({
    //     username: emailLowerCase,
    //     password: password,
    //   })
    // }
    router.push('/login-result')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-6">
        <input
          id="email"
          type="text"
          placeholder="Email"
          autoComplete="email"
          required
          className="px-4 py-3 rounded-full text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          {...register('email')}
        />
        {errors && errors.email && (
          <div className="mt-1 flex">
            <InputErrorMsg>{errors.email.message}</InputErrorMsg>
          </div>
        )}
        <div className="space-y-2">
          <input
            id="password"
            type="text"
            placeholder="Password"
            required
            autoComplete="current-password"
            className="px-4 py-3 rounded-full w-full text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            {...register('password')}
          />
          {errors && errors.password && (
            <div className="mt-1 flex">
              <InputErrorMsg>{errors.password.message}</InputErrorMsg>
            </div>
          )}

          {/* <Link href="/forgot-password">
            <a className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </Link> */}
        </div>
      </div>

      <div>
        <Button type="submit" loading={isSubmitting} className="w-full mt-6">
          Log in
        </Button>
      </div>
    </form>
  )
}

export const EmailPasswordLoginForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormVariables>({
    mode: 'onBlur',
  })

  const onSubmit = async ({ email, password }: LoginFormVariables) => {
    const emailLowerCase = email.toLocaleLowerCase().trim()

    const response = await EmailPassword.signIn({
      formFields: [
        {
          id: 'email',
          value: emailLowerCase,
        },
        {
          id: 'password',
          value: password,
        },
      ],
    })

    const validSession = await doesSessionExist()
    console.log({ validSession }, 'valid')
    console.log({ response })

    if (!response || response.status !== 'OK') {
      setError('password', {
        message: 'Gebruikersnaam of wachtwoord is incorrect',
      })
      setError('email', {
        message: 'Gebruikersnaam of wachtwoord is incorrect',
      })

      return
    }

    router.push('/login-result')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-6">
        <p>Email </p>
        <input
          id="email"
          type="text"
          autoComplete="email"
          required
          className="px-4 py-3 rounded-full text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          {...register('email')}
        />
        {errors && errors.email && (
          <div className="mt-1 flex">
            <InputErrorMsg>{errors.email.message}</InputErrorMsg>
          </div>
        )}
        <div className="space-y-2">
          <p>Password</p>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            className="px-4 py-3 rounded-full text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            {...register('password')}
          />
          {errors && errors.password && (
            <div className="mt-1 flex">
              <InputErrorMsg>{errors.password.message}</InputErrorMsg>
            </div>
          )}

          {/* <Link href="/forgot-password">
            <a className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </Link> */}
        </div>
      </div>

      <div>
        <Button type="submit" loading={isSubmitting} className="w-full mt-6">
          Log in
        </Button>
      </div>
    </form>
  )
}

export const PasswordlessLoginForm = ({
  hasRequestedCode,
  setHasRequestedCode,
  isGettingCode,
  setIsGettingCode,
}: {
  hasRequestedCode: boolean
  setHasRequestedCode: (value: boolean) => void
  isGettingCode: boolean
  setIsGettingCode: (value: boolean) => void
}) => {
  const router = useRouter()

  const [codeResponse, setCodeResponse] = useState<{
    deviceId: string
    preAuthSessionId: string
  }>()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
  } = useForm<LoginFormVariables>({
    mode: 'onBlur',
  })

  const getPasswordlessCode = async ({ email }: LoginFormVariables) => {
    if (email === undefined || email === '') {
      return setError('email', {
        message: 'Please enter an email',
      })
    }

    setHasRequestedCode(true)
    setIsGettingCode(true)
    const emailLowerCase = email.toLocaleLowerCase().trim()

    const response = await createPasswordlessCode(emailLowerCase)

    if (response.status === 'SIGN_IN_UP_NOT_ALLOWED') {
      return setError('email', {
        message: 'Not allowed to sign in or sign up',
      })
    }
    setCodeResponse({
      deviceId: response.deviceId,
      preAuthSessionId: response.preAuthSessionId,
    })
    setIsGettingCode(false)
  }

  const onSubmit = async ({ password }: LoginFormVariables) => {
    if (codeResponse === undefined) {
      return
    }

    const response = await consumePasswordlessCode(password)

    const validSession = await doesSessionExist()
    console.log({ validSession }, 'valid')
    console.log({ response })

    if (response.status === 'RESTART_FLOW_ERROR') {
      return window.location.reload()
    }

    if (response.status === 'EXPIRED_USER_INPUT_CODE_ERROR') {
      return setError('password', {
        message: 'Code expired',
      })
    }

    if (response.status === 'INCORRECT_USER_INPUT_CODE_ERROR') {
      return setError('password', {
        message: 'Incorrect code',
      })
    }

    router.push('/login-result')
  }

  const hasEnteredEmail = watch('email') !== undefined && watch('email') !== ''

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!hasRequestedCode && (
        <div className="flex flex-col space-y-6">
          {/* <InputField
            id="email"
            type="text"
            htmlForLabel="email"
            autoComplete="email"
            error={errors?.email?.message}
            label="Email"
            required
            name="email"
            register={register('email')}
          /> */}
          <input
            type="text"
            {...register('email')}
            autoComplete="email"
            placeholder="Email"
            className="px-4 py-3 rounded-full text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {errors && errors.email && (
            <div className="mt-1 flex">
              <InputErrorMsg>{errors.email.message}</InputErrorMsg>
            </div>
          )}
          <button
            type="submit"
            onClick={handleSubmit(getPasswordlessCode)}
            className={classNames(
              !hasEnteredEmail && !isGettingCode
                ? 'opacity-30 cursor-not-allowed'
                : '',
              'inline-flex items-center  justify-center px-4 py-3 text-sm font-medium bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50',
            )}
          >
            {isGettingCode ? (
              <div className="absolute flex">
                <Spinner size="4" />
              </div>
            ) : null}

            <span className="ml-2 font-medium text-xl">Get code</span>
          </button>
        </div>
      )}
      {hasRequestedCode && (
        <div className="flex flex-col space-y-6">
          <input
            type="number"
            {...register('password')}
            placeholder="Code"
            required
            className="px-4 py-4 rounded-full text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          {errors && errors.password && (
            <div className="mt-1 flex">
              <InputErrorMsg>{errors.password.message}</InputErrorMsg>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center rounded-full justify-center px-4 py-3 text-sm font-medium bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
          >
            {isSubmitting ? (
              <div className="absolute flex">
                <Spinner size="4" />
              </div>
            ) : null}
            <span className="ml-2 font-medium text-xl">Log in</span>
          </button>
        </div>
      )}
    </form>
  )
}
