import { useState, useEffect } from 'react'
import { fetchUserData } from 'lib/utils/supertokensUtilities'

export const useSupertokensUserId = () => {
  const [userId, setUserId] = useState<string | undefined | null>()

  useEffect(() => {
    fetchUserData().then((data: { userId: string | undefined }) => {
      if (data && data.userId) {
        setUserId(data.userId)
      }
    })
  }, [])

  return userId
}
