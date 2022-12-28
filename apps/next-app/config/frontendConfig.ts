/* eslint-disable import/prefer-default-export */
import Session from 'supertokens-web-js/recipe/session'
import ThirdPartyEmailPassword from 'supertokens-web-js/recipe/thirdpartyemailpassword'
import { appInfo } from './appInfo'

export const frontendConfig = () => ({
  appInfo,
  recipeList: [
    ThirdPartyEmailPassword.init(),
    Session.init({
      onHandleEvent: event => {
        if (event.action === 'UNAUTHORISED' || event.action === 'SIGN_OUT') {
          window.location.href = '/login'
        }
      },
    }),
  ],
})
