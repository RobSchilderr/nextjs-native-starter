import { signupWithEmailPassword } from './supertokensUtilities'

export const handleRegister = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  try {
    const superTokensResponse = await signupWithEmailPassword({
      email: email.toLowerCase().trim(),
      password,
    })

    // if (superTokensResponse !== 'OK') {
    //   throw new Error('Error creating Supertokens account')
    // }
    return superTokensResponse
  } catch (err: any) {
    // handle error
    console.log({ err })
  }
}
