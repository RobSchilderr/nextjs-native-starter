import { cn } from 'lib/utils/util'
import Link from 'next/link'

type Props = {
  href: string
  text?: string
  classNameHref?: string
  activeMenuState?: boolean
  isActiveHref?: boolean
  children?: React.ReactNode
  icon?: {
    icon: any
    className: string
  }
}

export const MenuLink = (props: Props) => {
  const {
    href,
    icon,
    isActiveHref,
    classNameHref = 'text-gray-500',
    activeMenuState,
    children,
    ...rest
  } = props
  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        isActiveHref ? 'font-medium text-gray-900' : '',
        activeMenuState ? 'bg-gray-100' : '',
        `group flex items-center px-4 py-2 text-sm ${classNameHref}`,
      )}
    >
      <>
        {icon && (
          <icon.icon
            className={`mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 ${icon.className} `}
            aria-hidden="true"
          />
        )}

        {children}
      </>
    </Link>
  )
}
