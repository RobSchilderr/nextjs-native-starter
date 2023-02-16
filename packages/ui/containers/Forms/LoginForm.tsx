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
import Passwordless, {} from "supertokens-web-js/recipe/passwordless";
import { useState } from 'react'
import { consumePasswordlessCode, createPasswordlessCode } from 'lib/utils/supertokensUtilities'

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

export const PasswordlessLoginForm = () => {
  const router = useRouter()
  const [isGettingCode, setIsGettingCode] = useState<boolean>(false);
  const [codeResponse, setCodeResponse] = useState<{
    deviceId: string;
    preAuthSessionId: string;
  }>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    getValues,
  } = useForm<LoginFormVariables>({
    mode: 'onBlur',
  })

  const getPasswordlessCode = async ({email}: LoginFormVariables) => {
    if (email === undefined || email === "") {
      return setError("email", {
        message: "Please enter an email",
      })
    }

    setIsGettingCode(true);
    const emailLowerCase = email.toLocaleLowerCase().trim()
    
    const response = await createPasswordlessCode(emailLowerCase);

    setCodeResponse({
      deviceId: response.deviceId,
      preAuthSessionId: response.preAuthSessionId,
    });
    setIsGettingCode(false);
  }

  const onSubmit = async ({ password }: LoginFormVariables) => {
    if (codeResponse === undefined) {
      return;
    }

    const response = await consumePasswordlessCode(password)

    const validSession = await doesSessionExist()
    console.log({ validSession }, 'valid')
    console.log({ response })

    if (response.status === "RESTART_FLOW_ERROR") {
      return window.location.reload();
    }

    if (response.status === "EXPIRED_USER_INPUT_CODE_ERROR") {
      return setError("password", {
        message: "Code expired",
      });
    }

    if (response.status === "INCORRECT_USER_INPUT_CODE_ERROR") {
      return setError("password", {
        message: "Incorrect code",
      });
    }

    router.push('/login-result')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-row space-x-6">
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

          <Button type='button' loading={isGettingCode} onClick={handleSubmit(getPasswordlessCode)}>
            Get Code
          </Button>
        </div>
        <div className="space-y-2">
          <InputField
            id="password"
            type="number"
            htmlForLabel="password"
            error={errors?.password?.message}
            label="Code"
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
