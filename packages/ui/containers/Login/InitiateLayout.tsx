/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react'
import { useRefreshUser } from 'lib/next-apps/hooks/useRefreshUser'

/**
 * @description if you use the splashscreen plugin you need add this to the top Layout component with a generic and loggedin version
 * this component is used to render get the initial data for the app/web and then render the correct layout component
 */

export const InitiateLayout = ({ children }: { children: React.ReactNode }) => {
  const refreshUser = useRefreshUser()
  useEffect(() => {
    console.log('InitiateLayout')
    const getUsersData = async () => {
      await refreshUser()
    }
    getUsersData()
  }, [])

  return <>{children}</>
}
