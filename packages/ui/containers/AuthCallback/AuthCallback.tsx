'use client'

import { useEffect, useState } from 'react'
import { loginToThirdParty } from 'lib/utils/supertokensUtilities'
import { logError } from 'lib/utils/logError'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import LoadingSpinnerPage from 'ui/components/LoadingSpinnerPage'
import Error from 'ui/components/Error'

type ErrorPage = {
  type: 'SERVER' | 'REQUEST'
  message?: string
}

export const AuthCallback = ({
  provider,
}: {
  provider: 'google' | 'apple'
}) => {
  const [error, setError] = useState<ErrorPage | any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()
  const windowIsReady = typeof window !== 'undefined'
  const searchParams = useSearchParams()
  const pathName = usePathname()
  useEffect(() => {
    let errorTimeout: NodeJS.Timeout

    async function login() {
      try {
        const loginResponse = await loginToThirdParty()

        if (!loginResponse) {
          errorTimeout = setTimeout(() => setError({ type: 'SERVER' }), 10000)
          return
        }

        if (loginResponse.status !== 'OK') {
          errorTimeout = setTimeout(
            () => setError({ type: 'REQUEST', message: loginResponse }),
            10000,
          )
          return
        }

        router.push('/login-result')
      } catch (err) {
        errorTimeout = setTimeout(() => setError(err), 10000)

        logError(err)
      } finally {
        setLoading(false)
      }
    }

    if (searchParams && pathName) {
      login()
    }
    return () => {
      // added the timeout because supertokens was throwing an error on the first request, maybe because the router isnt ready, not sure how to fix this
      if (errorTimeout) clearTimeout(errorTimeout)
    }
  }, [windowIsReady, pathName, searchParams])
  if (loading) return <LoadingSpinnerPage />

  if (error) return <Error title={`Something went wrong, ${error?.message}`} />
  // fix this later:
  return <LoadingSpinnerPage />
}

export default AuthCallback
