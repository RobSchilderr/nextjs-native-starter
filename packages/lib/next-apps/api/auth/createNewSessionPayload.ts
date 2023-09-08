import { getUserById } from 'lib/utils/supertokensNodeUtilities'
import sdk from 'lib/next-apps/fetchers/graphqlSdk'

type Input = {
  accessTokenPayload?: any
  userId: string
  sessionDataInDatabase?: any
  userContext: any
  disableAntiCsrf?: boolean
}

export const createNewSessionPayload = async (input: Input) => {
  const userInfo = await getUserById(input.userId)

  if (!userInfo) {
    return input.accessTokenPayload
  }

  const user = await sdk.GetPerson({
    condition: {
      email: {
        _eq: userInfo.email,
      },
    },
  })

  // if the user is not in our Hasura database, we don't want to edit the session payload
  if (!user?.data || !user.data.person || !user.data.person[0]) {
    return input.accessTokenPayload
  }

  // Now that you have the userId, here you could fetch the user's extra data from your database
  // like roles, permissions, an organisation id, etc. and add it to the accessTokenPayload
  const allowedRoles = [user.data.person[0].role]
  const userId = user.data.person[0].id
  const { role } = user.data.person[0]
  // Important: Hasura requires claims to be set in a specifc way
  // Read the official documentation to know more:
  //  https://hasura.io/docs/latest/auth/authentication/jwt/

  const newAccessTokenPayload = {
    ...input.accessTokenPayload,
    'https://hasura.io/jwt/claims': {
      'x-hasura-user-id': userId,
      'x-hasura-default-role': role,
      'x-hasura-allowed-roles': allowedRoles,
    },
  }

  return newAccessTokenPayload
}
