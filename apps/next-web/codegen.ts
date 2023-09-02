/* eslint-disable @typescript-eslint/no-var-requires */
import { HASURA_ENDPOINT } from 'lib/utils/config'
import { CodegenConfig } from '@graphql-codegen/cli'

const dotenv = require('dotenv')

const path = process.env.ENV_PATH || '.env.local'
dotenv.config({ path })

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    '../../packages/graphql-generated/admin.ts': {
      schema: {
        [HASURA_ENDPOINT]: {
          headers: {
            'x-hasura-admin-secret': 'myadminsecretkey',
            'x-hasura-role': 'admin',
          },
        },
      },
      documents: [
        '../../packages/graphql-lib/hasura/query/admin/**/*.gql',
        // '../../packages/graphql-lib/hasura/mutation/admin/**/*.gql',
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        'named-operations-object',
      ],
      config: {
        skipTypename: false,
        withComponent: false,
        rawRequest: true,
        documentMode: 'string',
      },
    },
    '../../packages/graphql-generated/anonymous.ts': {
      schema: {
        [HASURA_ENDPOINT]: {
          headers: {
            'x-hasura-admin-secret': 'myadminsecretkey',
            'x-hasura-role': 'anonymous',
          },
        },
      },
      documents: [
        '../../packages/graphql-lib/hasura/query/anonymous/**/*.gql',
        // '../../packages/graphql-lib/hasura/mutation/anonymous/**/*.gql',
      ],

      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        'named-operations-object',
      ],

      config: {
        skipTypename: false,
        withComponent: false,
        fetcher:
          'lib/next-apps/fetchers/hasuraAnonymousFetcher#hasuraAnonymousFetcher',
      },
    },
    '../../packages/graphql-generated/moderator.ts': {
      schema: {
        [HASURA_ENDPOINT]: {
          headers: {
            'x-hasura-admin-secret': 'myadminsecretkey',
            'x-hasura-role': 'moderator',
          },
        },
      },
      documents: [
        '../../packages/graphql-lib/hasura/query/moderator/**/*.gql',
        // '../../packages/graphql-lib/hasura/mutation/moderator/**/*.gql',
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        'named-operations-object',
      ],
      config: {
        skipTypename: false,
        withComponent: false,
        fetcher: 'lib/next-apps/fetchers/hasuraUserFetcher#hasuraUserFetcher',
      },
    },
  },
}

export default config
