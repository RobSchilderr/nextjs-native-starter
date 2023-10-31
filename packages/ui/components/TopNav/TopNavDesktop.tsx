import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { BellIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ProfileNavBar } from 'ui/components/TopNav/ProfileNavBar'

const TopNavDesktop = () => {
  const router = useRouter()

  const navLinks = [
    {
      name: 'Settings',
      href: '/settings',
      current: router.pathname.includes('/settings'),
    },
  ]

  return (
    <div>
      <header className="relative bg-white">
        {/* <p className='flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-gray-900 sm:px-6 lg:px-8'>
          Gratis bezorging boven de € 15000,-
        </p> */}

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link
                  href="/"
                  className="text-4xl mx-auto font-display font-bold text-gray-900 "
                >
                  NextJs Native
                </Link>
              </div>

              {/* Flyout menus */}

              <div className="ml-10 flex space-x-8 ">
                {navLinks.map(link => (
                  <Link href={link.href} key={link.name}>
                    <span
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      aria-current={link.current ? 'page' : undefined}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Search */}
              <div className="ml-auto flex items-center">
                <div className="cursor-pointer p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Zoeken</span>
                  <MagnifyingGlassIcon
                    onClick={() => console.log('search')}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <div className=" flex items-center  md:ml-3">
                  <div className="cursor-pointer p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Zoeken</span>
                    <BellIcon
                      onClick={() => console.log('Notifications')}
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <ProfileNavBar />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default TopNavDesktop
