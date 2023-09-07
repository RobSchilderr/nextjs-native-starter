import { ReactNode } from 'react'
import { cn } from 'lib/utils/util'

export const ButtonGroup = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <div className={cn(className, 'flex space-x-2')}>{children}</div>
