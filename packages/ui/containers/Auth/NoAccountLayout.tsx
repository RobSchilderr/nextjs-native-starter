import { useNativeOS } from 'lib/utils/capacitor'
import { cn } from 'lib/utils/util'
import MobileTopNavWithReturn from '../../components/TopNav/MobileTopNavWithReturn'

type Props = {
  withReturn?: boolean
  withDarkBG?: boolean
  children: React.ReactNode
  pageTitle: string
  withTopNav?: boolean
}

const NoAccountLayout = ({
  children,
  pageTitle,
  withReturn,
  withDarkBG = false,
  withTopNav = true,
}: Props) => {
  const nativeOS = useNativeOS()
  const bg = withDarkBG ? 'bg-gray-100' : 'bg-white'

  return (
    <div
      className={`relative flex h-full w-full  ${
        nativeOS === 'ios' ? 'min-h-screen-safe' : 'min-h-screen'
      }`}
    >
      <div className="w-full flex-1 focus:outline-none">
        {withTopNav && (
          <MobileTopNavWithReturn
            showOnDesktop
            withReturn={withReturn}
            pageTitle={pageTitle}
          />
        )}

        <main
          className={cn(
            withTopNav ? 'bg-gray-50 pt-16' : 'bg-white pt-6',
            `${bg}`,
            `disable-scrollbars relative flex h-full flex-1 `,
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

export default NoAccountLayout
