import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { usePlatform } from 'lib/utils/capacitor'
import { loginToThirdParty } from 'lib/utils/supertokensUtilities'
import LoadingSpinnerPage from 'ui/components/LoadingSpinnerPage'
import { getAccessTokenPayloadSecurely } from 'supertokens-web-js/recipe/session'
import Error from 'ui/components/Error'
// import { useRegisterStore } from 'ui-platform/global-stores/useRegisterStore'

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
  const executedQuery = useRef(false)
  const router = useRouter()
  const platform = usePlatform()

  useEffect(() => {
    // Browser.close()
    const code = router.query?.code ?? null

    async function login() {
      // const previousPath = await getPreviousPath()

      try {
        const loginResponse = await loginToThirdParty()
        executedQuery.current = true

        console.log({ loginResponse })
        if (!loginResponse) {
          setError({ type: 'SERVER' })
          return
        }

        if (loginResponse.status !== 'OK') {
          setError({ type: 'REQUEST', message: loginResponse })
          return
        }

        const payload = await getAccessTokenPayloadSecurely()

        console.log({ payload })
        if (platform === 'APP') {
          router.push('/login-result')
          return
        }

        // if (
        //   previousPath &&
        //   !authPages.includes(previousPath) &&
        //   previousPath !== '/'
        // ) {
        //   router.push(previousPath)
        //   return
        // }

        router.push('/login-result')
      } catch (err) {
        // add error handling with Sentry here
        setError(err)
      }
    }

    if (code && !executedQuery.current) {
      login()
    }
  }, [router])

  if (error) return <Error title={`Something went wrong, ${error?.message}`} />
  return <LoadingSpinnerPage />
}

export default AuthCallback
