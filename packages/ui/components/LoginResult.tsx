'use client'

import Session from 'supertokens-web-js/recipe/session'
import { signout } from 'lib/utils/supertokensUtilities'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AuthLayout } from 'ui/components/AuthLayout'

export const LoginResult = () => {
  const router = useRouter()

  const [userId, setUserId] = React.useState<string | undefined>()

  async function logoutClicked() {
    await signout()
    await router.push('/login')
  }

  async function fetchUserData() {
    if (await Session.doesSessionExist()) {
      // user is logged in
      const sessionUserId = await Session.getUserId()
      setUserId(sessionUserId)
      const accessTokenSecurely = await Session.getAccessTokenPayloadSecurely()
      console.log(accessTokenSecurely)
      console.log('user is logged in')
    } else {
      console.log('user is not logged in')
    }

    return null
  }

  return (
    <AuthLayout>
      <main className="px-6 mt-6 space-y-6">
        <h1>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </h1>
        <p>You are authenticated with SuperTokens!</p>

        <button
          className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent  rounded-lg hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
          type="button"
          onClick={fetchUserData}
        >
          {' '}
          Click to fetch user data
        </button>

        <p>
          UserId: {userId} <br />
        </p>

        <div className="flex flex-col space-y-3">
          <p>Now lets log out again:</p>
          <button
            className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent  rounded-lg hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
            type="button"
            onClick={logoutClicked}
          >
            Logout
          </button>
        </div>
      </main>
    </AuthLayout>
  )
}
