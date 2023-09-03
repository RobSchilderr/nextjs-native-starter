import React, { forwardRef } from 'react'
import Input from 'ui/components/Input'
import InputErrorMsg from 'ui/components/InputErrorMsg'
import { Label } from 'ui/components/Label'

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  errorMsg?: string
  error?: any
  label?: string
  register: any
  textarea?: boolean
  rightAddon?: string
  rightAddonId?: string
  inputHelperMessage?: string
  leftAddon?: string
  altErrorMsg?: string
  htmlForLabel?: string
  smallLabelText?: string
  className?: string
  classNameContainer?: string
  classNameInnerInputContainer?: string
  rows?: number
  tooltip?: string

  withRequired?: boolean
}

const InputField = forwardRef<
  React.InputHTMLAttributes<HTMLInputElement>,
  InputFieldProps
>(
  (
    {
      name,
      label,
      textarea,
      errorMsg,
      rightAddon,
      htmlForLabel,
      rightAddonId,
      leftAddon,
      inputHelperMessage,
      error,
      register,
      className,
      smallLabelText,
      classNameContainer,
      tooltip,
      withRequired,
      classNameInnerInputContainer,
      ...props
    },
    ref,
  ) => (
    <div
      className={`block h-full w-full overflow-hidden ${classNameContainer}`}
    >
      {label ? (
        <div className="align-center flex">
          <Label
            tooltip={tooltip}
            htmlFor={htmlForLabel}
            smallLabelTextForInputs={smallLabelText}
            className="flex"
          >
            {label}
          </Label>
          {/* {props.required && withRequired ? <span className='ml-1 text-red-600'>*</span> : null} */}
        </div>
      ) : null}
      <Input
        ref={ref}
        inputHelperMessage={inputHelperMessage}
        error={error}
        className={className}
        rightAddon={rightAddon}
        rightAddonId={rightAddonId}
        leftAddon={leftAddon}
        textarea={textarea}
        classNameInnerInputContainer={classNameInnerInputContainer}
        {...register}
        {...props}
      />
      {error ? (
        <div className="mt-1 flex">
          <InputErrorMsg>{errorMsg || error}</InputErrorMsg>
        </div>
      ) : null}
    </div>
  ),
)
export default InputField
