/* eslint-disable react/button-has-type */
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react'
import { Spinner } from './ButtonSpinner'

const sizeClassnames = {
  big: 'py-2 px-6 text-sm rounded-lg',
  small: 'px-2 py-1 text-sm rounded-md',
  tiny: 'px-1 text-sm rounded-5',
}

export const buttonColorClassnames = {
  primary:
    'text-white bg-blue-600 rounded-md border border-transparent hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover',
  secondary:
    'text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-blue-500',
  //   'secondary-800': 'text-button bg-primary-800 hover:bg-primary-600 disabled:text-primary-300',
  'primary-blue':
    'bg-blue-600 text-white border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500',
  'primary-cyan':
    'bg-cyan-600 hover:bg-cyan-700 text-white border border-transparent rounded-md focus:outline-none focus:ring-cyan-500',
  transparent: 'text-button bg-transparent',
  'accent-secondary':
    'text-button bg-secondary hover:bg-secondary-washed-out disabled:text-secondary-washed-out',
  delete:
    'text-white bg-red-600 rounded-md border border-transparent hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2  ',
}

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames
  color?: keyof typeof buttonColorClassnames
  loading?: boolean
  icon?: ReactNode
  transition?: boolean
  type: 'button' | 'submit' | 'reset'
  ref?: React.Ref<HTMLButtonElement>
}

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      children,
      size = 'big',
      color = 'primary',
      disabled,
      loading,
      icon,
      type,
      className = '',
      transition,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        disabled={disabled || loading}
        type={type}
        className={`px-4 py-2 font-medium shadow-sm focus:ring-2 focus:ring-offset-2  disabled:cursor-not-allowed
    focus:ring-${color} ${sizeClassnames[size]} ${
          transition ? `transition duration-200 ease-in-out` : ``
        } ${
          buttonColorClassnames[color]
        } flex items-center justify-center ${className}`}
        data-testid="button"
        {...props}
        ref={ref}
      >
        <span className={loading ? 'opacity-0' : `flex items-center`}>
          {icon ? <span className="items-center mr-2 ">{icon}</span> : null}
          {children}
        </span>
        {loading ? (
          <div className="absolute flex">
            <Spinner size={size === 'small' ? '2' : '4'} />
            <span className="pl-3">{children}</span>
          </div>
        ) : null}
      </button>
    )
  },
)

export const RoundPlusButton: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      children,
      size = 'big',
      color = 'primary',
      disabled,
      loading,
      icon,
      type,
      className = '',
      transition,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        disabled={disabled || loading}
        type={type}
        className={`rounded-full px-3 py-3 font-medium shadow-sm focus:ring-2 focus:ring-offset-2  disabled:cursor-not-allowed
    focus:ring-${color}  ${
          transition ? `transition duration-200 ease-in-out` : ``
        } ${
          buttonColorClassnames[color]
        } flex items-center justify-center ${className}`}
        data-testid="button"
        {...props}
        ref={ref}
      >
        <span className={loading ? 'opacity-0' : `flex items-center`}>
          {icon ? <span className="items-center ">{icon}</span> : null}
          {children}
        </span>
        {loading ? (
          <div className="absolute flex">
            <Spinner size={size === 'small' ? '2' : '4'} />
            <span className="pl-3">{children}</span>
          </div>
        ) : null}
      </button>
    )
  },
)
