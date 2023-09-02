import { useUserStore } from 'ui/global-stores/useUserStore'

export const useRefreshUser = () => {
  const fetchUser = useUserStore(state => state.fetchUser)

  async function refreshUser() {
    try {
      await fetchUser()
      return true
    } catch (err) {
      return false
    }
  }

  return refreshUser
}
