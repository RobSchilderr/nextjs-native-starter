/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { IS_IN_PRODUCTION_ENVIRONMENT } from 'lib/utils/config'

import Session from 'supertokens-node/recipe/session'
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword'
import { TypeInput } from 'supertokens-node/types'
import { appInfo } from './appInfo'

export const backendConfig = (): TypeInput => ({
  framework: 'express',
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI as string,
    apiKey: process.env.SUPERTOKENS_API_KEY as string,
  },
  appInfo,
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        // We have provided you with development keys which you can use for testing.
        // IMPORTANT: Please replace them with your own OAuth keys for production use.
        ThirdPartyEmailPassword.Google({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        /**
         * These credentials are provided by the SuperTokens team for debugging purposes: https://supertokens.com/docs/thirdpartyemailpassword/custom-ui/init/backend#3-initialise-social-login-providers
         * 
         * Remember to replace these with your own before deploying to production
         */
        ThirdPartyEmailPassword.Apple({
          clientId: "4398792-io.supertokens.example.service",
          clientSecret: {
              keyId: "7M48Y4RYDL",
              privateKey:
                  "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
              teamId: "YWQCXGJRJL",
          },
        }),
      ],
    }),
    Session.init({
      // For localhost, we need to set sameSite to strict, due to no https
      cookieSameSite: !IS_IN_PRODUCTION_ENVIRONMENT ? 'strict' : 'none',
    }),
  ],
  isInServerlessEnv: true,
})
