import type { NavLinks } from 'lib/utils/navLinks'
import { AppNavItem } from 'ui/components/AppNav/AppNavItem'

type AppNavProps = {
  items: NavLinks
  className?: string
}

export const AppNav = ({ items, className }: AppNavProps) => (
  <nav className={className}>
    <ul className="divide-y divide-gray-200">
      {items.map(item => (
        <AppNavItem key={item.name} {...item} />
      ))}
    </ul>
  </nav>
)
