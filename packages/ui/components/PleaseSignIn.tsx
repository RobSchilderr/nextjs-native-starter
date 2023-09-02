import { logError } from 'lib/utils/logError'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUserStore } from 'ui/global-stores/useUserStore'

type Props = {
  children: React.ReactNode
}

export const PleaseSignIn = ({ children }: Props) => {
  const router = useRouter()
  const user = useUserStore(state => state.user)
  const isFetched = useUserStore(state => state.isFetched)

  useEffect(() => {
    if (isFetched && !user) {
      router.push('/login').catch(err => logError(err))
    }
  }, [user, isFetched])

  return isFetched && user ? <>{children}</> : <p>A fancy loading state.. </p>
}
