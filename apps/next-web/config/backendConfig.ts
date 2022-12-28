/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { IS_IN_PRODUCTION_ENVIRONMENT } from 'config/config'
import Session from 'supertokens-node/recipe/session'
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword'
import { TypeInput } from 'supertokens-node/types'
import { appInfo } from './appInfo'

export const backendConfig = (): TypeInput => ({
  framework: 'express',
  supertokens: {
    connectionURI: 'https://try.supertokens.io',
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

        ThirdPartyEmailPassword.Apple({
          clientId: process.env.APPLE_CLIENT_ID as string,
          clientSecret: {
            keyId: process.env.APPLE_KEY_ID as string,
            privateKey: process.env.APPLE_PRIVATE_KEY?.replace(
              /\\n/g,
              '\n',
            ) as string,
            teamId: process.env.APPLE_TEAM_ID as string,
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
