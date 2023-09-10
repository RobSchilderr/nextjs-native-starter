import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  HomeIcon as SolidHomeIcon,
  Bars3BottomLeftIcon as SolidBars3BottomLeftIcon,
  BellIcon as SolidBellIcon,
} from '@heroicons/react/20/solid'
import {
  HomeIcon,
  Bars3BottomLeftIcon,
  BellIcon,
} from '@heroicons/react/24/outline'

import { cn } from 'lib/utils/util'
import { useNativeOS } from 'lib/utils/capacitor'

const overViewPage = '/overview'
const homePage = '/home'

export const BottomNavigation: React.FC = () => {
  const router = useRouter()
  const nativeOS = useNativeOS()
  const isHomePage = router && router.asPath.includes(homePage)
  const isOverviewPage = router && router.asPath.includes(overViewPage)
  const isNotificationsPage = router && router.asPath.includes('/notifications') // doesnt exist
  return (
    <nav
      id="bottom-navigation"
      className="overflow:hidden mx-safe mb-safe fixed inset-x-0 bottom-0 z-40 block border-t bg-white px-4 shadow print:hidden sm:px-6 lg:hidden"
    >
      <div
        id="tabs"
        className={cn(
          'flex justify-between',
          nativeOS === 'ios' ? 'pb-safe px-safe' : 'pb-1',
        )}
      >
        <Link href={homePage}>
          <div className="inline-block w-full justify-center pt-2 text-center ">
            {isHomePage ? (
              <SolidHomeIcon
                className="text-brand-green mb-1 inline-block h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <HomeIcon
                className={cn(
                  isHomePage ? 'text-brand-green' : 'text-gray-600',
                  'mb-1 inline-block h-6 w-6',
                )}
                aria-hidden="true"
              />
            )}

            <span className="block text-xs text-gray-600 ">Home</span>
          </div>
        </Link>

        <div>
          <div className="inline-block w-full justify-center pt-2 text-center ">
            {isNotificationsPage ? (
              <SolidBellIcon
                className="text-brand-green mb-1 inline-block h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <BellIcon
                className={cn(
                  isNotificationsPage ? 'text-brand-green' : 'text-gray-600',
                  'mb-1 inline-block h-6 w-6',
                )}
                aria-hidden="true"
              />
            )}

            <span className="block text-xs text-gray-600 ">Notifications</span>
          </div>
        </div>

        <Link href={overViewPage}>
          <div className="inline-block w-full justify-center pb-1 pt-2 text-center ">
            {isOverviewPage ? (
              <SolidBars3BottomLeftIcon
                className="text-brand-green mb-1 inline-block h-6 w-6"
                aria-hidden="true"
              />
            ) : (
              <Bars3BottomLeftIcon
                className={cn(
                  isOverviewPage ? 'text-brand-green' : 'text-gray-600',
                  'mb-1 inline-block h-6 w-6',
                )}
                aria-hidden="true"
              />
            )}

            <span className="block text-xs text-gray-600 ">More</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}
