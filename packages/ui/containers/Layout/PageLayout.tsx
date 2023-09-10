/* eslint-disable react/jsx-no-useless-fragment */
import { cn } from 'lib/utils/util'
import TopNavDesktop from '../../components/TopNav/TopNavDesktop'
import { BottomNavigation } from './BottomNavigation'

type PageLayoutProps = {
  withBottomNav?: boolean
  children: React.ReactNode
}

export const PageLayout = ({
  children,
  // mobileTopNavVariant = 'defaultWithOnlyReturnButton',
  withBottomNav = true,
}: PageLayoutProps) => (
  <>
    <div className={cn(`relative w-full`, 'min-h-screen')}>
      <div className="z-50 hidden lg:block">
        <TopNavDesktop />
      </div>

      <div className="disable-scrollbars relative flex h-full w-full flex-1 flex-col">
        {children}
        {withBottomNav && <BottomNavigation />}
      </div>
    </div>
  </>
)