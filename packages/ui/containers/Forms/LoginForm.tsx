import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import InputField from 'ui/components/InputField'
import { Button } from 'ui/components/Button'
// import { getPreviousPath } from 'lib/next-apps/shared/storage'
// import { authPages } from 'lib/next-apps/platform/config'
// import { SavePassword } from 'capacitor-ios-autofill-save-password'
import { emailPasswordSignIn } from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import { doesSessionExist } from 'supertokens-web-js/recipe/session'
import EmailPassword from 'supertokens-web-js/recipe/emailpassword';

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
        <InputField
          id="email"
          type="text"
          htmlForLabel="email"
          autoComplete="email"
          error={errors?.email?.message}
          label="Email"
          required
          name="email"
          register={register('email')}
        />
        <div className="space-y-2">
          <InputField
            id="password"
            type="password"
            htmlForLabel="password"
            error={errors?.password?.message}
            label="Password"
            autoComplete="current-password"
            name="password"
            required
            register={register('password')}
          />
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
        <InputField
          id="email"
          type="text"
          htmlForLabel="email"
          autoComplete="email"
          error={errors?.email?.message}
          label="Email"
          required
          name="email"
          register={register('email')}
        />
        <div className="space-y-2">
          <InputField
            id="password"
            type="password"
            htmlForLabel="password"
            error={errors?.password?.message}
            label="Password"
            autoComplete="current-password"
            name="password"
            required
            register={register('password')}
          />
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
