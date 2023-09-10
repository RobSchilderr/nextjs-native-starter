import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'lib/utils/navLinks'
import { cn } from 'lib/utils/util'

export const AppNavItem = ({
  href,
  name,
  icon: Icon,
  backgroundColor,
}: NavLink) => (
  <li className="bg-white px-4  sm:px-6">
    <Link
      href={href}
      className="flex w-full cursor-pointer  flex-row items-center justify-between py-3"
    >
      <div className={cn(`bg-${backgroundColor}-600`, `p-1 rounded-md`)}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="w-full px-4 text-left hover:cursor-pointer">
        <span className="text-gray-500  hover:cursor-pointer">{name}</span>
      </div>
      <ChevronRightIcon className="h-6 w-6 text-gray-500" />
    </Link>
  </li>
)
