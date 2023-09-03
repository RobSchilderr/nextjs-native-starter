import React, { forwardRef } from 'react'

/*
 read: https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
 */

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  ref?: any
  textarea?: boolean
  rows?: number
  error?: string
  register?: any
  leftAddon?: string
  rightAddonId?: string
  rightAddon?: string
  inputHelperMessage?: string
  transparent?: boolean
  classNameInnerInputContainer?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      textarea,
      error,
      rightAddon,
      rightAddonId,
      inputHelperMessage,
      leftAddon,
      transparent,
      classNameInnerInputContainer,
      ...props
    },
    ref,
  ) => {
    const bg = transparent ? `bg-transparent` : `bg-white`
    const isLeftAddon = leftAddon ? 'pl-7' : 'pl-3'
    const isRightAddon = rightAddon ? 'pr-12' : 'pr-3'
    const ring = error
      ? `focus:border-red-500  border-red-500 text-red-600  focus:invalid:ring-red-500`
      : 'focus:ring-indigo-500 focus:border-indigo-500'

    const cn = `block overflow-hidden mb-1 rounded-md shadow-sm w-full py-2 pr-12 text-gray-700 bg-white border border-gray-300 sm:text-sm ${isRightAddon} ${isLeftAddon} ${bg} ${ring} ${className}`
    return textarea ? (
      <div className="relative mt-2">
        <textarea
          ref={ref as any}
          className={cn}
          data-testid="textarea"
          {...(props as any)}
        />
        {inputHelperMessage && (
          <div className="mt-1 text-sm text-gray-500">{inputHelperMessage}</div>
        )}
      </div>
    ) : (
      <>
        <div className={`relative mt-1 ${classNameInnerInputContainer}`}>
          {leftAddon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm">{leftAddon}</span>
            </div>
          )}
          <input className={cn} ref={ref} data-testid="input" {...props} />
          {rightAddon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500 sm:text-sm" id={rightAddonId}>
                {rightAddon}
              </span>
            </div>
          )}
        </div>
        {inputHelperMessage && (
          <div className="mt-2 text-sm text-gray-500">{inputHelperMessage}</div>
        )}
      </>
    )
  },
)

Input.displayName = 'Input'

export default Input
