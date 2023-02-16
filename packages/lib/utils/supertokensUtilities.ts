import ThirdPartyEmailPassword from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import ThirdParty from "supertokens-web-js/recipe/thirdparty";
import Session from "supertokens-web-js/recipe/session";
import { AUTH_MODE, FRONTEND_URL, REDIRECT_URL } from 'lib/utils/config'

import { Platform } from './common.types'

type LoginWithEmailPasswordArgs = {
  email: string
  password: string
}

export const signupWithEmailPassword = async ({
  email,
  password,
}: LoginWithEmailPasswordArgs) =>
  ThirdPartyEmailPassword.emailPasswordSignUp({
    formFields: [
      {
        id: 'email',
        value: email,
      },
      {
        id: 'password',
        value: password,
      },
    ],
  })

export const signinWithEmailPassword = async ({
  email,
  password,
}: LoginWithEmailPasswordArgs) =>
  ThirdPartyEmailPassword.emailPasswordSignIn({
    formFields: [
      {
        id: 'email',
        value: email,
      },
      {
        id: 'password',
        value: password,
      },
    ],
  })

export const loginToThirdParty = async () => {
  if (AUTH_MODE === "thirdparty") {
    return ThirdParty.signInAndUp();
  }

  return ThirdPartyEmailPassword.thirdPartySignInAndUp();
}

export const signout = async () => Session.signOut()

export const resetPassword = async ({ password }: { password: string }) =>
  ThirdPartyEmailPassword.submitNewPassword({
    formFields: [
      {
        id: 'password',
        value: password,
      },
    ],
  })

export const requestPassword = async ({ email }: { email: string }) =>
  ThirdPartyEmailPassword.sendPasswordResetEmail({
    formFields: [
      {
        id: 'email',
        value: email,
      },
    ],
  })

const getThirdPartyURL = async (
  thirdPartyId: 'google' | 'apple',
  authorisationURL: string,
) => {
  if (AUTH_MODE === "thirdparty") {
    return ThirdParty.getAuthorisationURLWithQueryParamsAndSetState({
      providerId: thirdPartyId,
      authorisationURL,
    });
  }

  return ThirdPartyEmailPassword.getAuthorisationURLWithQueryParamsAndSetState({
    providerId: thirdPartyId,
    authorisationURL,
  });
}

export const onThirdPartyLogin = async ({
  provider,
  platform,
}: {
  provider: 'google' | 'apple'
  platform: Platform
}) => {
  try {
    const isApp = platform === 'APP'
    const authorisationURL = isApp
      ? `${REDIRECT_URL}/api/auth/redirect?provider=${provider}`
      : `${FRONTEND_URL}/auth/callback/${provider}`

    const response = await getThirdPartyURL(provider, authorisationURL)

    if (isApp) {
      window.open(response, '_self')
    } else {
      window.location.href = response
    }
  } catch (error) {
    // TODO: add your error handling here
    console.log(error)
  }
}
