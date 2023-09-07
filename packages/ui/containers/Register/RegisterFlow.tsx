import { useEffect, useState } from 'react'

import { useNativeOS } from 'lib/utils/capacitor'
import { useRegisterPersonMutation } from 'graphql-generated/anonymous'
import {
  SuperTokensUserData,
  fetchUserData,
  renewSession,
} from 'lib/utils/supertokensUtilities'
import { logError } from 'lib/utils/logError'
import { useRouter } from 'next/router'
// import Success from '../../components/SuccessRegister'
import { useRefreshUser } from 'lib/next-apps/hooks/useRefreshUser'
import RegisterLayout from 'ui/containers/Register/RegisterLayout'
import { SingleFieldTextForm } from 'ui/components/Form/SingleFieldTextForm'
import { useUserStore } from 'ui/global-stores/useUserStore'
import { toastError, toastSuccess } from 'ui/components/Toast/toast'

const pageTitle = 'Complete registration'

export const RegisterFlow = () => {
  const isNative = useNativeOS()
  const deviceToken = useUserStore(state => state.deviceToken)

  // We fetch the supertokens ID and query the email on the backend in register.ts
  const router = useRouter()
  const { success } = router.query
  const refreshUser = useRefreshUser()

  const [supertokensUserData, setSupertokensUserData] = useState<
    SuperTokensUserData | undefined | null
  >(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData()
      setSupertokensUserData(data)
    }
    fetchData()
  }, [])
  const { mutateAsync: register } = useRegisterPersonMutation()

  const handleFormSubmit = async (values: { text: string }) => {
    try {
      if (!supertokensUserData?.userId) {
        throw new Error('userId not found')
      }
      const registerResult = await register({
        variables: {
          givenName: values.text,
          supertokensUserId: supertokensUserData.userId,
          ...(isNative && {
            deviceToken,
          }),
        },
      })

      if (registerResult.registerPerson.success) {
        toastSuccess('Successfully registered!')
        // We create the new payload with the JWT token
        await renewSession()
        // we add the user to the global store
        await refreshUser()

        await router.push('/myaccount')
      }
    } catch (error) {
      toastError('Error: something went wrong. Please try again.')
      logError(error)
      console.log('error: ', error)
    }
  }
  return (
    <RegisterLayout pageTitle={pageTitle}>
      {/* {success === 'true' && <Success />} */}
      {success !== 'true' && (
        <SingleFieldTextForm
          onFormSubmit={handleFormSubmit}
          label="What is your first name?"
          maxLengthString={50}
          errorMessage="First name is required"
          name="firstName"
          id="firstName"
        />
      )}
    </RegisterLayout>
  )
}
