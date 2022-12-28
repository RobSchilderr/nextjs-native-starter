import { signupWithEmailPassword } from './supertokensUtilities'

const handleRegister = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const superTokensResponse = await signupWithEmailPassword({
      email: email.toLowerCase().trim(),
      password: password,
    })

    if (superTokensResponse.status !== 'OK') {
      throw new Error('Error creating Supertokens account')
    }
    return superTokensResponse
  } catch (err: any) {
    // handle error
    console.log({ err })
  }
}
