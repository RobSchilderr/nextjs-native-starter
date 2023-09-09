import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { cn } from 'lib/utils/util'
import { hierarchyClassnames } from 'ui/components/Text'
import { Spinner } from 'ui/components/ButtonSpinner'

const buttonHierarchyClassnames = {
  ...hierarchyClassnames,
  buttonText: 'text-brand-green text-sm hover:text-green-500 underline',
  buttonTextDanger: 'text-red-600 text-sm hover:text-red-700 underline',
  buttonTextNeutral: 'text-gray-600 text-sm hover:text-gray-700 underline',
}

export type ButtonTextProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick: () => void
  buttonTextClassnames?: keyof typeof buttonHierarchyClassnames
  className?: string
  text?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  loading?: boolean
  color?: 'red' | 'green'
}

export const ButtonText = ({
  children,
  className = '',
  iconLeft,
  buttonTextClassnames = 'buttonText',
  iconRight,
  onClick,
  text,
  loading,
  ...props
}: ButtonTextProps) => {
  const classNames = `${buttonHierarchyClassnames[buttonTextClassnames]} ${className}`
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={cn(
        classNames,
        'disabled:decoration-none disabled:text-gray-600 disabled:no-underline',
      )}
      {...props}
    >
      <span className="flex items-center">
        {iconLeft ? (
          <span className="mr-2 items-center ">{iconLeft}</span>
        ) : null}

        {!loading ? text || children : null}

        {loading ? (
          <div className="absolute flex">
            <Spinner size="4" />
          </div>
        ) : null}

        {iconRight ? (
          <span className="ml-4 items-center">{iconRight}</span>
        ) : null}
      </span>
    </button>
  )
}
