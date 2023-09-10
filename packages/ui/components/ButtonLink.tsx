/* eslint-disable react/prop-types */
import React from 'react'

export const ButtonLink: React.FC<React.ComponentPropsWithoutRef<'button'>> = ({
  children,
  className,
  onClick,
  ...props
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-primary-100 text-md underline ${className ?? ''}`}
    {...props}
  >
    {children}
  </button>
)
