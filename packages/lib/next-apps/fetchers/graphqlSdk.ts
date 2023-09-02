import { GraphQLClient } from 'graphql-request'
import { getSdk } from 'graphql-generated/admin'
import { HASURA_ADMIN_SECRET, HASURA_ENDPOINT } from 'lib/utils/config'

const graphQLClient = new GraphQLClient(HASURA_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
  },
})
const sdk = getSdk(graphQLClient)
export default sdk
