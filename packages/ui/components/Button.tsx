/* eslint-disable react/prop-types */
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react'
import { cn } from 'lib/utils/util'
import { Spinner } from './ButtonSpinner'

const sizeClassnames = {
  big: 'py-2 px-4 text-sm ',
  small: 'px-2 py-1 text-sm ',
  tiny: 'px-2 text-xs',
}

export const buttonColorClassnames = {
  primary:
    'text-white font-semibold bg-orange-600 rounded-md border border-transparent hover:bg-orange-500 focus:ring-orange-500  ',
  error:
    'text-white bg-red-600 rounded-md border border-transparent hover:bg-red-700 focus:ring-red-500',
  secondary:
    'text-gray-700 bg-white border border-orange-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-orange-500',
  //   'secondary-800': 'text-button bg-primary-800 hover:bg-primary-600 disabled:text-primary-300',
  transparent:
    'text-button border bg-transparent text-button bg-white hover:bg-gray-50',
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
  className?: string
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
  ) => (
    <button
      disabled={disabled || loading}
      type={type === 'button' ? 'button' : 'submit'}
      className={cn(
        className,
        icon ? 'pl-1 pr-3 sm:pl-3 sm:pr-6' : '',
        transition ? `transition duration-200 ease-in-out` : ``,
        `focus:ring-${color} ${sizeClassnames[size]} ${buttonColorClassnames[color]} 
        flex items-center justify-center ${className} 
        buttonColorClassnames[color] py-2 font-medium shadow-sm focus:ring-2 
        focus:ring-offset-2 disabled:cursor-not-allowed  
        disabled:border disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400`,
      )}
      data-testid="button"
      {...props}
      ref={ref}
    >
      <span className={loading ? 'opacity-0' : `flex items-center`}>
        {icon ? <span className="mr-2 items-center ">{icon}</span> : null}
        {children}
      </span>
      {loading ? (
        <div className="absolute flex">
          <Spinner size={size === 'small' ? '2' : '4'} />
          <span className="pl-3">{children}</span>
        </div>
      ) : null}
    </button>
  ),
)
