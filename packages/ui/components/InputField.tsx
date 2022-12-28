import React, { forwardRef } from 'react'
import Input from 'ui/components/Input'
import InputErrorMsg from 'ui/components/InputErrorMsg'

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
  rows?: number
}

const InputField = forwardRef<
  React.InputHTMLAttributes<HTMLInputElement>,
  InputFieldProps
>(
  ({
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
    ...props
  }) => {
    return (
      <div className={`block h-full w-full  ${classNameContainer}`}>
        {label ? (
          <div className="flex align-center">
            <label
              htmlFor={htmlForLabel}
              className={`flex text-sm font-medium text-gray-700`}
            >
              {label}
            </label>
            {smallLabelText && (
              <span className="pl-1 mt-1 text-xs text-gray-500">
                {smallLabelText}
              </span>
            )}
          </div>
        ) : null}
        <Input
          inputHelperMessage={inputHelperMessage}
          error={error}
          className={className}
          rightAddon={rightAddon}
          rightAddonId={rightAddonId}
          leftAddon={leftAddon}
          textarea={textarea}
          {...register}
          {...props}
        />
        {error ? (
          <div className={`mt-1 flex `}>
            <InputErrorMsg>{errorMsg || error}</InputErrorMsg>
          </div>
        ) : null}
      </div>
    )
  },
)

export default InputField
