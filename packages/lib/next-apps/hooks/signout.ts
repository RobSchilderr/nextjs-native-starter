import Session from 'supertokens-auth-react/recipe/session'

export const useSignout = () => async () => {
  await Session.signOut()

  window.location.href = '/login'
}
