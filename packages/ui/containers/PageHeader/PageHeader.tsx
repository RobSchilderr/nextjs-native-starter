import { useRouter } from 'next/router'
import { cn } from 'lib/utils/util'
import { ButtonProps, Button } from 'ui/components/Button'
import { ButtonText, ButtonTextProps } from 'ui/components/ButtonText'
import { Container } from 'ui/components/Container'
import { Text } from 'ui/components/Text'
import { MobileTopNav } from '../../components/AppNav/MobileTopNav'
import { ReturnBreadcrumb } from '../../components/ReturnBreadcrumb'

type PageHeaderProps = {
  title: string
  mainAction?: ButtonProps & {
    text: string
  }
  sideActions?: ButtonTextProps[]
  subTitle?: string
  onRouterBack?: () => void
  previousPageTitle?: string
  showOnDesktop?: boolean
  withDesktopReturn?: boolean
}
export const PageHeader = ({
  title,
  mainAction,
  sideActions,
  subTitle,
  onRouterBack,
  previousPageTitle,
  showOnDesktop = true,
  withDesktopReturn = false,
}: PageHeaderProps) => {
  const router = useRouter()
  const subPages = [
    '/admin/bestellingen/bestelregels',
    '/admin/producten/nieuw',
    '/admin/bestellingen/pickups',
    '/admin/logistiek/ritten',
  ]
  const isOnDynamicPage =
    router.pathname.includes('[') || subPages.includes(router.pathname)

  // todo: add sideactions on mobile
  return (
    <>
      {isOnDynamicPage && (
        <MobileTopNav
          pageTitle={title}
          onRouterBack={onRouterBack}
          previousPageTitle={previousPageTitle}
          // mainAction={mainAction}
          // sideActions={sideActions}
        />
      )}
      {showOnDesktop && (
        <Container
          className={cn(isOnDynamicPage ? 'hidden lg:block' : 'block')}
        >
          <div className="flex flex-row items-center justify-between py-4  print:hidden sm:py-6">
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-3">
                {withDesktopReturn && <ReturnBreadcrumb />}
                <Text
                  HtmlElement="h1"
                  className="font-gopher text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight"
                >
                  {title}
                </Text>
              </div>
              {subTitle && (
                <Text
                  HtmlElement="p"
                  hierarchyVariant="secondaryText"
                  className="mt-1"
                >
                  {subTitle}
                </Text>
              )}
            </div>

            {mainAction || sideActions ? (
              <div className="flex items-center sm:mt-0">
                <div className="hidden sm:flex">
                  {sideActions &&
                    sideActions.map(action => (
                      <div key={`${action.text}`} className="ml-6">
                        <ButtonText
                          className="text-brand-green hover:text-green-500"
                          {...action}
                        >
                          {action.text}
                        </ButtonText>
                      </div>
                    ))}
                </div>
                {/* TODO: fix mobile UI with sideaction like shopify */}
                {/* <div className='flex sm:hidden'>
        <ButtonWithDropdown />
      </div> */}
                {mainAction && (
                  <Button
                    icon={mainAction.icon}
                    type={mainAction.type}
                    className={`ml-6 inline-flex ${mainAction.className || ''}`}
                    color="primary"
                    onClick={mainAction.onClick}
                  >
                    {mainAction.text}
                  </Button>
                )}
              </div>
            ) : null}
          </div>
        </Container>
      )}
    </>
  )
}
