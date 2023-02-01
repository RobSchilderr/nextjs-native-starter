import { signout } from 'lib/utils/supertokensUtilities'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Home = () => {
  const router = useRouter()

  const [sessionHandle, setSessionHandle] = React.useState()
  const [userId, setUserId] = React.useState()

  async function logoutClicked() {
    await signout()
    await router.push('/login')
  }

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

  return (
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

      <div className="flex flex-col space-y-3">
        <p>Now lets log out again:</p>
        <button
          className="px-6 py-2 text-sm text-white bg-blue-600 border border-transparent rounded-md rounded-lg hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
          type="button"
          onClick={logoutClicked}
        >
          Logout
        </button>
      </div>
    </main>
  )
}
export default Home
