import Session from 'supertokens-web-js/recipe/session'

export const useSignout = () => async () => {
  await Session.signOut()

  window.location.href = '/login'
}
