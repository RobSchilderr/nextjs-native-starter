/* eslint-disable import/prefer-default-export */
import { AUTH_MODE } from 'lib/utils/config';

import Session from 'supertokens-web-js/recipe/session'
import { SuperTokensConfig } from "supertokens-web-js/types";
import ThirdPartyEmailPassword from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import EmailPassword from 'supertokens-web-js/recipe/emailpassword';
import ThirdParty from 'supertokens-web-js/recipe/thirdparty';
import Passwordless from 'supertokens-web-js/recipe/passwordless';
import ThirdPartyPasswordless from 'supertokens-web-js/recipe/thirdpartypasswordless';
import { appInfo } from './appInfo'

const sessionInit = Session.init({
  // cookieDomain: getCookiesDomain(),
  onHandleEvent: event => {
    if (event.action === 'UNAUTHORISED' || event.action === 'SIGN_OUT') {
      window.location.href = '/login'
    }
  },
  tokenTransferMethod: "header",
});

const thirdPartyEmailPasswordConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    ThirdPartyEmailPassword.init(),
    sessionInit,
  ],
})

const emailPasswordConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    EmailPassword.init(),
    sessionInit,
  ],
})

const passwordlessConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    Passwordless.init(),
    sessionInit,
  ],
})

const thirdPartyConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    ThirdParty.init(),
    sessionInit,
  ],
})

const thirdPartyPasswordlessConfig = (): SuperTokensConfig => ({
  appInfo,
  recipeList: [
    ThirdPartyPasswordless.init(),
    sessionInit,
  ],
})

export function getFrontendConfig(): SuperTokensConfig {
  if (AUTH_MODE === "emailpassword") {
    return emailPasswordConfig();
  }

  if (AUTH_MODE === "thirdparty") {
    return thirdPartyConfig();
  }

  if (AUTH_MODE === "thirdpartyemailpassword") {
    return thirdPartyEmailPasswordConfig();
  }

  if (AUTH_MODE === "passwordless") {
    return passwordlessConfig();
  }

  return thirdPartyPasswordlessConfig();
}
