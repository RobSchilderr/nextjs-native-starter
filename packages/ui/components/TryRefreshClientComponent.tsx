'use client'

/* eslint-disable no-void */

import { useEffect, useState } from 'react'
import { useRouter, redirect } from 'next/navigation'
import Session from 'supertokens-web-js/recipe/session'

export const TryRefreshComponent = () => {
  const router = useRouter()
  const [didError, setDidError] = useState(false)

  useEffect(() => {
    void Session.attemptRefreshingSession()
      .then(hasSession => {
        if (hasSession) {
          router.refresh()
        } else {
          /**
           * This means that the session is expired and cannot be refreshed.
           * In this example we redirect the user back to the login page.
           */
          redirect('/login')
        }
      })
      .catch(() => {
        setDidError(true)
      })
  }, [])

  if (didError) {
    return <div>Something went wrong, please reload the page</div>
  }

  return <div>Loading...</div>
}
