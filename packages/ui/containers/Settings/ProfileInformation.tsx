import { useEditingState } from 'lib/hooks/useEditingState'
import { User } from 'lib/types/common'
import {
  namedOperations,
  useUpdatePersonMutation,
} from 'graphql-generated/moderator'
import { useQueryClient } from '@tanstack/react-query'
import { SettingsEditableTextForm } from '../../components/Form/Editable/SettingsEditableTextForm'
import { toastError, toastSuccess } from '../../components/Toast/toast'

type CancelEditingFunctions = {
  given_name: () => void
  //   family_name: () => void
  //   phone_number: () => void
}

type FieldName = 'given_name'
//  | 'family_name' | 'phone_number'

type UpdateFieldProps = {
  fieldName: FieldName
  newValue: string
  friendlyFieldName: string
}

export const ProfileInformation = ({ user }: { user: User }) => {
  const queryClient = useQueryClient()
  const { mutateAsync: updatePerson } = useUpdatePersonMutation()

  const {
    isEditing: isChangingGivenName,
    startEditing: startChangingGivenName,
    cancelEditing: cancelChangingGivenName,
  } = useEditingState(false)

  //   const {
  //     isEditing: isChangingFamilyName,
  //     startEditing: startChangingFamilyName,
  //     cancelEditing: cancelChangingFamilyName,
  //   } = useEditingState(false)

  //   const {
  //     isEditing: isChangingPhoneNumber,
  //     startEditing: startChangingPhoneNumber,
  //     cancelEditing: cancelChangingPhoneNumber,
  //   } = useEditingState(false)

  const { id: personId, given_name: givenName } = user as {
    id: string
    given_name: string
  }

  const cancelEditingFunctions: CancelEditingFunctions = {
    given_name: cancelChangingGivenName,
    // family_name: cancelChangingFamilyName,
    // phone_number: cancelChangingPhoneNumber,
  }

  const updateField = async ({
    fieldName,
    newValue,
    friendlyFieldName,
  }: UpdateFieldProps) => {
    if (!personId) {
      toastError('Something went wrong. Please try again.')
      return
    }

    const currentFieldValue = user[fieldName]
    if (currentFieldValue === newValue) {
      // If the new value is the same as the current value, cancel editing and do nothing
      cancelEditingFunctions[fieldName]()
      return
    }

    await updatePerson({
      condition: { id: { _eq: personId } },
      variables: { [fieldName]: newValue },
    })
    await queryClient.invalidateQueries([namedOperations.Query.GetPerson])
    toastSuccess(`${friendlyFieldName} is changed!`)
    cancelEditingFunctions[fieldName]()
  }

  const handleChangingField = async (
    values: { text: string },
    fieldName: FieldName,
    friendlyFieldName: string,
  ) => {
    await updateField({
      fieldName,
      newValue: values.text,
      friendlyFieldName,
    })
  }

  return (
    <div>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Profile
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-500">
        This information will be displayed publicly so be careful what you
        share.
      </p>

      <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
        <SettingsEditableTextForm
          text={givenName || ''}
          isUpdating={isChangingGivenName}
          cancelEditing={cancelChangingGivenName}
          startEditing={startChangingGivenName}
          defaultValue={givenName}
          onFormSubmit={values =>
            handleChangingField(values, 'given_name', 'First name')
          }
          label="First name"
          maxLengthFormString={40}
        />

        <div className="pt-6 sm:flex">
          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
            Email address
          </dt>
          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
            <div className="text-gray-900">tom.cook@example.com</div>
            <button
              type="button"
              className=" text-indigo-600 hover:text-indigo-500"
            >
              Update
            </button>
          </dd>
        </div>
        <div className="pt-6 sm:flex">
          <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
            Title
          </dt>
          <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
            <div className="text-gray-900">Human Resources Manager</div>
            <button
              type="button"
              className=" text-indigo-600 hover:text-indigo-500"
            >
              Update
            </button>
          </dd>
        </div>
      </dl>
    </div>
  )
}
