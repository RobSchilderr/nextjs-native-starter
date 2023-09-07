import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import InputField from 'ui/components/InputField'
import { ButtonGroup } from 'ui/components/ButtonGroup'
import { Button } from 'ui/components/Button'

type Props = {
  onFormSubmit: SubmitHandler<{
    text: string
  }>
  label?: string
  textarea?: boolean
  rightAddon?: string
  rightAddonId?: string
  inputHelperMessage?: string
  leftAddon?: string
  htmlForLabel?: string
  smallLabelText?: string
  className?: string
  classNameContainer?: string
  classNameInnerInputContainer?: string
  defaultValue?: string | null
  cancelEditing?: () => void
  maxLengthString: number
  tooltip?: string
  name?: string
  errorMessage?: string
  autocomplete?: string
  id?: string
}

export const SingleFieldTextForm = ({
  onFormSubmit,
  label,
  textarea,
  rightAddon,
  htmlForLabel,
  rightAddonId,
  leftAddon,
  inputHelperMessage,
  defaultValue,
  className,
  smallLabelText,
  classNameContainer,
  classNameInnerInputContainer,
  cancelEditing,
  maxLengthString,
  tooltip,
  errorMessage = 'Field is required',
  autocomplete = 'nope',
  name = 'text',
  id = 'text',
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{
    text: string
  }>({
    mode: 'onBlur',
    defaultValues: {
      text: defaultValue || '',
    },
    resolver: zodResolver(
      z.object({
        text: z
          .string()
          .min(1, { message: errorMessage })
          .max(maxLengthString, {
            message: `Maximaal ${maxLengthString} tekens`,
          }),
      }),
    ),
  })

  return (
    <form
      className="flex flex-col space-y-3"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <InputField
        autoComplete={autocomplete}
        type="text"
        label={label}
        id={id}
        error={errors.text?.message}
        register={register('text')}
        name={name}
        inputHelperMessage={inputHelperMessage}
        className={className}
        rightAddon={rightAddon}
        rightAddonId={rightAddonId}
        leftAddon={leftAddon}
        textarea={textarea}
        classNameInnerInputContainer={classNameInnerInputContainer}
        smallLabelText={smallLabelText}
        tooltip={tooltip}
        classNameContainer={classNameContainer}
        htmlForLabel={htmlForLabel}
      />
      <ButtonGroup className="flex justify-end space-x-2">
        {cancelEditing && (
          <Button
            type="button"
            className="pl-6 text-gray-500 hover:text-gray-600"
            onClick={cancelEditing}
            color="secondary"
          >
            Cancel
          </Button>
        )}
        <Button loading={isSubmitting} type="submit" color="primary">
          Submit
        </Button>
      </ButtonGroup>
    </form>
  )
}
