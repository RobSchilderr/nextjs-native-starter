// todo:

import RegisterLayout from 'ui/containers/Register/RegisterLayout'
import { SingleFieldTextForm } from 'ui/components/Form/SingleFieldTextForm'
import { useNativeOS } from 'lib/utils/capacitor'
import { useUserStore } from '../../global-stores/useUserStore'
import { useRegisterPersonMutation } from 'graphql-generated/anonymous'
// - add supertokensId to init database
// - insert user into database

const pageTitle = 'Complete registration'

export const RegisterFlow = () => {
  const isNative = useNativeOS()
  const deviceToken = useUserStore(state => state.deviceToken)

  const { mutateAsync: register } = useRegisterPersonMutation()

  const handleFormSubmit = async (values: { text: string }) => {
    console.log('handleFormSubmit, values: ', values)

    try {
      // register stuff

      await register({
        variables: {
          email: 'test@test.nl',
          givenName: 'test',
          deviceToken: 'test',
          marketingSource: 'test',
          supertokensUserId: 'test',
        },
      })
    } catch (error) {
      console.log('error: ', error)
    }
  }
  return (
    <RegisterLayout pageTitle={pageTitle}>
      <SingleFieldTextForm
        onFormSubmit={handleFormSubmit}
        label="What is your first name?"
        maxLengthString={50}
        errorMessage="First name is required"
        name="firstName"
        id="firstName"
      />
    </RegisterLayout>
  )
}
