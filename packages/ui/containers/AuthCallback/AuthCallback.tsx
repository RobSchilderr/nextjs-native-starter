import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { loginToThirdParty } from 'lib/utils/supertokensUtilities'
import { logError } from 'lib/utils/logError'
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
  const router = useRouter()
  const routerIsReady = router?.isReady
  console.log(provider, 'provider')
  useEffect(() => {
    async function login() {
      try {
        const loginResponse = await loginToThirdParty()

        if (!loginResponse) {
          setError({ type: 'SERVER' })
          return
        }

        if (loginResponse.status !== 'OK') {
          setError({ type: 'REQUEST', message: loginResponse })
          return
        }

        router.push('/login-result')
      } catch (err) {
        setError(err)
        logError(err)
      }
    }

    if (routerIsReady) {
      login()
    }
  }, [routerIsReady])

  if (error) return <Error title={`Something went wrong, ${error?.message}`} />
  return <LoadingSpinnerPage />
}

export default AuthCallback
