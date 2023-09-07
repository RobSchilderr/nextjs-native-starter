import { logError } from 'lib/utils/logError'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUserStore } from 'ui/global-stores/useUserStore'
import LoadingSpinnerPage from './LoadingSpinnerPage'

type Props = {
  children: React.ReactNode
}
export const PleaseSignIn = ({ children }: Props) => {
  const router = useRouter()
  const userFromDatabase = useUserStore(state => state.user)
  const isFetched = useUserStore(state => state.isFetched)
  const isAuthenticatedWithSupertokens = useUserStore(
    state => state.isSupertokensAuthenticated,
  )

  useEffect(() => {
    // in this scenario, the user has logged in with supertokens but has not registered with our app
    if (!userFromDatabase && isAuthenticatedWithSupertokens) {
      router.push('/registerpasswordless').catch(err => logError(err))
    }
    // in this scenario, the user has not logged in with supertokens and has not registered with our app
    if (isFetched && !userFromDatabase && !isAuthenticatedWithSupertokens) {
      router.push('/login').catch(err => logError(err))
    }
  }, [userFromDatabase, isFetched, isAuthenticatedWithSupertokens])

  return isFetched && userFromDatabase ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <LoadingSpinnerPage />
  )
}
