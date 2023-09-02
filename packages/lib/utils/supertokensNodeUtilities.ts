import Passwordless from 'supertokens-node/recipe/passwordless'
import ThirdPartyEmailPassword from 'supertokens-node/recipe/thirdpartyemailpassword'
import ThirdParty from 'supertokens-node/recipe/thirdparty'
import EmailPassword from 'supertokens-node/recipe/emailpassword'
import ThirdPartyPasswordless from 'supertokens-node/recipe/thirdpartypasswordless'
import { AUTH_MODE } from 'lib/utils/config'

export const getUserById = async (userId: string) => {
  if (AUTH_MODE === 'emailpassword') {
    return EmailPassword.getUserById(userId)
  }

  if (AUTH_MODE === 'thirdparty') {
    return ThirdParty.getUserById(userId)
  }

  if (AUTH_MODE === 'thirdpartyemailpassword') {
    return ThirdPartyEmailPassword.getUserById(userId)
  }

  if (AUTH_MODE === 'passwordless') {
    return Passwordless.getUserById({
      userId,
    })
  }

  return ThirdPartyPasswordless.getUserById(userId)
}
