import Link from 'next/link'
import React from 'react'
import { AuthLayout } from 'ui/components/AuthLayout'
import {
  getAccessTokenPayloadSecurely,
  getAccessToken,
} from 'supertokens-web-js/recipe/session'

import { useSignout } from 'lib/next-apps/hooks/signout'

const Home = () => {
  const [sessionHandle, setSessionHandle] = React.useState()
  const [userId, setUserId] = React.useState()
  const logOut = useSignout()

  async function fetchUserData() {
    const res = await fetch('/api/user')

    if (res.status === 200) {
      const json = await res.json()

      setSessionHandle(json.sessionHandle)
      setUserId(json.userId)
      return json
    }
    return null
  }

  const getJWT = async () => {
    let jwtToken: string | undefined = ''
    const accessTokenPayload =
      (await getAccessTokenPayloadSecurely()) as Record<string, string>
    if (accessTokenPayload.sub !== undefined) {
      jwtToken = await getAccessToken()
    } else {
      jwtToken = accessTokenPayload.jwt
    }

    return jwtToken
  }

  return (
    <AuthLayout>
      <main className="px-6 mt-6 space-y-6">
        <h1>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </h1>
        <p>You are authenticated with SuperTokens!</p>

        <button
          className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md rounded-lg hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
          type="button"
          onClick={fetchUserData}
        >
          {' '}
          Click to fetch user data
        </button>

        <p>
          UserId: {userId} <br />
          SessionHandle: {sessionHandle}
        </p>

        <p>
          {' '}
          I also enabled JWTs for you. You can get the JWT by clicking the
          button:{' '}
        </p>

        <button
          className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md  hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
          type="button"
          onClick={() => getJWT().then(jwt => console.log(jwt))}
        >
          {' '}
          Console log JWT
        </button>

        <div className="flex flex-col space-y-3">
          <p>Now you could log out again:</p>
          <button
            className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md  hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
            type="button"
            onClick={logOut}
          >
            Logout
          </button>
          <p> Or check a role based protected-route: </p>

          <Link
            href="/protected-route"
            className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md  hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
          >
            Auth protected Route
          </Link>
        </div>
      </main>
    </AuthLayout>
  )
}
export default Home
