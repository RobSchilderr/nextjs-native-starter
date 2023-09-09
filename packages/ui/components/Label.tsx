import React from 'react'
import Tippy from '@tippyjs/react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export type As<Props = any> = React.ElementType<Props>

export const variants = {
  inputLabel: 'text-sm font-medium text-gray-700',
  inputLabelMedium: 'font-medium text-gray-700 text-md',
  lightLabel: 'text-sm font-medium text-gray-500',
  mediumLabel: 'font-medium text-gray-900',
}

export const Label = ({
  htmlFor,
  variant = 'inputLabel',
  className = '',
  HtmlElement = 'label',
  children,
  smallLabelTextForInputs,
  tooltip,
}: {
  htmlFor?: string
  className?: string
  children: React.ReactNode
  variant?: keyof typeof variants
  HtmlElement?: As
  smallLabelTextForInputs?: string
  tooltip?: string
}) => (
  <HtmlElement
    htmlFor={htmlFor}
    className={`${variants[variant]} flex flex-row items-center ${className}`}
  >
    {children}
    {smallLabelTextForInputs && (
      <span className="mt-1 pl-1 text-xs text-gray-500">
        {smallLabelTextForInputs}
      </span>
    )}
    {tooltip && (
      <Tippy content={tooltip}>
        <InformationCircleIcon className="ml-2 h-5 w-5 text-gray-500" />
      </Tippy>
    )}
  </HtmlElement>
)
