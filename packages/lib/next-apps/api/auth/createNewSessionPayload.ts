type Input = {
  accessTokenPayload?: any
  userId: string
  sessionDataInDatabase?: any
  userContext: any
  disableAntiCsrf?: boolean
}

export const createNewSessionPayload = async (input: Input) => {
  const userId = input.userId

  // Now that you have the userId, here you could fetch the user's roles from your database
  const roles = ['user', 'anonymous']
  const role = 'user'

  // Important: Hasura requires claims to be set in a specifc way
  // Read the official documentation to know more:
  //  https://hasura.io/docs/latest/auth/authentication/jwt/

  input.accessTokenPayload = {
    ...input.accessTokenPayload,
    'https://hasura.io/jwt/claims': {
      'x-hasura-user-id': userId,
      'x-hasura-default-role': role,
      'x-hasura-allowed-roles': roles,
    },
  }

  return input.accessTokenPayload
}
