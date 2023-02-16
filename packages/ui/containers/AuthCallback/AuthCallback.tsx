import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { loginToThirdParty } from 'lib/utils/supertokensUtilities'
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
        // add error handling  here
        setError(err)
      }
    }

    login()
  }, [router])

  if (error) return <Error title={`Something went wrong, ${error?.message}`} />
  return <LoadingSpinnerPage />
}

export default AuthCallback
