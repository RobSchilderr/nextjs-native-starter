import {
  HomeIcon,
  CogIcon,
  InformationCircleIcon,
  FolderIcon,
} from '@heroicons/react/24/outline'

export const navLinks = [
  {
    href: '/',
    name: 'Address Info',
    icon: HomeIcon,
    subNavLinks: [],
    backgroundColor: 'blue',
  },
  {
    href: '/settings',
    name: 'General settings',
    icon: CogIcon,
    subNavLinks: [],
    backgroundColor: 'gray',
  },
  {
    href: '/about',
    name: 'About',
    icon: InformationCircleIcon,
    subNavLinks: [],
    backgroundColor: 'blue',
  },
  {
    href: '/privacy',
    name: 'Privacy Policy',
    icon: FolderIcon,
    subNavLinks: [],
    backgroundColor: 'purple',
  },
  {
    href: '/terms',
    name: 'Terms of Service',
    icon: FolderIcon,
    subNavLinks: [],
    backgroundColor: 'purple',
  },
]

//  get the type of navLinks

export type NavLink = (typeof navLinks)[0]

export type NavLinks = typeof navLinks
