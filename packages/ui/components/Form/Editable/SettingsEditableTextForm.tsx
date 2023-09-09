import { truncateString } from 'lib/utils/util'
import { SingleFieldTextForm } from 'ui/components/Form/SingleFieldTextForm'
import { ButtonText } from 'ui/components/ButtonText'
import { Label } from 'ui/components/Label'

export const SettingsEditableTextForm = ({
  text,
  cancelEditing,
  isUpdating,
  defaultValue,
  startEditing,
  onFormSubmit,
  label,
  isLoading,
  maxLengthButtonText,
  maxLengthFormString,
  buttonText = 'Update',
  withUpdateButton = true,
  tooltip,
}: {
  text: string
  isUpdating: boolean
  cancelEditing: () => void
  startEditing: () => void
  defaultValue?: string | null
  onFormSubmit: (values: { text: string }) => void
  label: string
  isLoading?: boolean
  buttonText?: string
  maxLengthButtonText?: number
  maxLengthFormString: number
  withUpdateButton?: boolean
  tooltip?: string
}) => {
  // const editIconClassnames =
  //   buttonTextClassnames === 'inputDescription' ? 'w-4 h-4 text-yellow-600' : 'w-5 h-5 text-yellow-600'

  const buttonTextLabel = maxLengthButtonText
    ? truncateString(text, maxLengthButtonText).value
    : text
  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
      <Label HtmlElement="dt" variant="mediumLabel" tooltip={tooltip}>
        {label}
      </Label>
      <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <span className="flex-grow">
          {!isUpdating ? (
            buttonTextLabel
          ) : (
            <SingleFieldTextForm
              maxLengthString={maxLengthFormString}
              defaultValue={defaultValue}
              onFormSubmit={onFormSubmit}
              cancelEditing={cancelEditing}
              tooltip={tooltip}
            />
          )}
        </span>
        <span className="ml-4 flex-shrink-0">
          {withUpdateButton && !isUpdating && (
            <ButtonText
              type="button"
              onClick={startEditing}
              loading={isLoading}
              className="text-blue-600 no-underline rounded-md bg-white  hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {buttonText}
            </ButtonText>
          )}
        </span>
      </dd>
    </div>
  )
}
