import { useRouter } from 'next/router'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { cn } from 'lib/utils/util'
// import { ButtonTextProps } from 'ui/components/ButtonText'
// import { ButtonProps } from 'ui/components/Button'

type MobileTopNavProps = {
  pageTitle: string
  previousPageTitle?: string
  onRouterBack?: () => void
  showOnDesktop?: boolean
  withReturn?: boolean
  //   mainAction?: ButtonProps & {
  //     text: string
  //   }
  //   sideActions?: ButtonTextProps[]
}

export const MobileTopNav = ({
  pageTitle,
  onRouterBack,
  previousPageTitle,
  showOnDesktop,
  withReturn = true,
}: MobileTopNavProps) => {
  const router = useRouter()

  // position fixed is necessary because on safari the sticky top nav doesnt appear in viewport on capacitor when switching
  // between apps after opening a Drawer from Headless UI. Super edge case.
  return (
    <>
      <div
        className={cn(
          showOnDesktop ? '' : 'lg:hidden lg:border-none',
          'fixed top-[calc(0%_+_safe-top)] z-30 flex  h-10 w-screen flex-1 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white print:hidden',
        )}
      >
        <nav className="flex w-32   " aria-label="Breadcrumb">
          <div className="inline-flex items-start  ">
            {withReturn && (
              <button
                type="button"
                onClick={
                  onRouterBack ? () => onRouterBack() : () => router.back()
                }
                className="inline-flex items-center  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <ChevronLeftIcon
                  className="text-brand-green h-5 w-5"
                  aria-hidden="true"
                />
                <span className="text-brand-green pl-1  text-sm">
                  {previousPageTitle}
                </span>
              </button>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-1  justify-center  text-center">
          <p className="items-center text-sm font-semibold text-gray-600">
            {pageTitle}
          </p>
        </div>
        <div className="flex w-32 ">
          <div className="w-5" />
        </div>
      </div>
      <div className="h-10 lg:h-0" />
    </>
  )
}
