import React from 'react'
import { useUserStore } from 'ui/global-stores/useUserStore'

const MyAccount = () => {
  const user = useUserStore(state => state.user)

  return <p>Here we are going to build my account page: {user?.email}</p>
}

export default MyAccount
