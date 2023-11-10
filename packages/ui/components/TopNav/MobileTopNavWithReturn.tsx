import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { cn } from 'lib/utils/util'
import { useRouter } from 'next/navigation'

type MobileTopNavWithReturnProps = {
  pageTitle: string
  showOnDesktop?: boolean
  withReturn?: boolean
}

const MobileTopNavWithReturn = ({
  pageTitle,
  showOnDesktop,
  withReturn = false,
}: MobileTopNavWithReturnProps) => {
  const router = useRouter()

  // position fixed is necessary because on safari the sticky top nav doesnt appear in viewport on capacitor when switching between apps after opening a Drawer from Headless UI. Super edge case.
  return (
    <div
      className={cn(
        showOnDesktop ? '' : 'lg:hidden lg:border-none',
        'fixed top-[calc(0%_+_safe-top)] z-30 flex h-16 w-screen flex-1 flex-shrink-0 border-b border-gray-200 bg-white ',
      )}
    >
      <nav className="flex items-center px-4 sm:px-6" aria-label="Breadcrumb">
        <div className="inline-flex items-start p-2 ">
          {withReturn && (
            <button
              type="button"
              onClick={() => router.push('/')}
              className="inline-flex items-center font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <ArrowLeftIcon
                className="h-5 w-5 text-gray-900"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </nav>
      <div className="mr-4 flex flex-1 justify-between">
        <div className="flex-start flex flex-1 items-center justify-center">
          <p className="items-center text-lg font-medium text-gray-900">
            {pageTitle}
          </p>
        </div>

        {/* dummy div to center */}
        <div className="flex items-center px-4 sm:px-6">
          <div className="w-5" />
        </div>
      </div>
    </div>
  )
}

export default MobileTopNavWithReturn
