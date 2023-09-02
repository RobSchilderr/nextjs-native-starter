/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = process.env.ENV_PATH || '.env.local'
dotenv.config({ path })

module.exports = {
  overwrite: true,
  generates: {
    '../../packages/graphql-generated/anonymous.ts': {
      schema: {
        [process.env.NEXT_PUBLIC_HASURA_ENDPOINT]: {
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
        [process.env.NEXT_PUBLIC_HASURA_ENDPOINT]: {
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
