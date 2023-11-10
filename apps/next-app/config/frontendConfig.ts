/* eslint-disable import/prefer-default-export */
import { AUTH_MODE } from 'lib/utils/config'

import { useRouter } from 'next/navigation'

import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword'
import Passwordless from 'supertokens-auth-react/recipe/passwordless'
import ThirdParty from 'supertokens-auth-react/recipe/thirdparty'
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless'

import SessionReact from 'supertokens-auth-react/recipe/session'
import { SuperTokensConfig } from 'supertokens-auth-react/lib/build/types'
import { appInfo } from './appInfo'

type WindowHandlerInterface = Parameters<
  NonNullable<SuperTokensConfig['windowHandler']>
>[0]
const routerInfo: { router?: ReturnType<typeof useRouter>; pathName?: string } =
  {}

export function setRouter(
  router: ReturnType<typeof useRouter>,
  pathName: string,
) {
  routerInfo.router = router
  routerInfo.pathName = pathName
}

const sessionInit = SessionReact.init({
  // cookieDomain: getCookiesDomain(),
  onHandleEvent: event => {
    if (event.action === 'UNAUTHORISED' || event.action === 'SIGN_OUT') {
      window.location.href = '/login'
    }
  },
  // * 2. Important Capacitor note:
  /*
   * Note: The 'header' token transfer method is only being used in the app, and not in the web.
   * This is a crucial difference in how the application handles sessions compared to the web.
   * This design choice has been made due to the specific requirements and limitations in the app environment.
   * For more information on the token transfer method, refer to the Supertokens documentation at
   * https://supertokens.com/docs/thirdparty/common-customizations/sessions/token-transfer-method
   */
  tokenTransferMethod: 'header',
})

const configWindowHandler = (original: WindowHandlerInterface) => ({
  ...original,
  location: {
    ...original.location,
    getPathName: () => routerInfo.pathName!,
    // @ts-ignore
    assign: url => routerInfo.router!.push(url.toString()),
    // @ts-ignore
    setHref: url => routerInfo.router!.push(url.toString()),
  },
})

const thirdPartyEmailPasswordConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [ThirdPartyEmailPassword.init(), sessionInit],
  windowHandler: configWindowHandler,
})

const emailPasswordConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [EmailPassword.init(), sessionInit],
  windowHandler: configWindowHandler,
})

const passwordlessConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    Passwordless.init({
      contactMethod: 'EMAIL',
    }),
    sessionInit,
  ],
  windowHandler: configWindowHandler,
})

const thirdPartyConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [ThirdParty.init(), sessionInit],
  windowHandler: configWindowHandler,
})

const thirdPartyPasswordlessConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
    }),
    sessionInit,
  ],
  windowHandler: configWindowHandler,
})

export function getFrontendConfig(): SuperTokensConfig {
  if (AUTH_MODE === 'emailpassword') {
    return emailPasswordConfig()
  }

  if (AUTH_MODE === 'thirdparty') {
    return thirdPartyConfig()
  }

  if (AUTH_MODE === 'thirdpartyemailpassword') {
    return thirdPartyEmailPasswordConfig()
  }

  if (AUTH_MODE === 'passwordless') {
    return passwordlessConfig()
  }

  return thirdPartyPasswordlessConfig()
}
