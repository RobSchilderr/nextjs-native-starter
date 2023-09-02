// this route could be protected by role-based access control (RBAC) and requires authentication
// in our case, the RBAC will be implemented with Hasura GraphQL permissions and a JWT token
// https://supertokens.com/docs/thirdpartyemailpassword/hasura-integration/with-jwt#3--add-custom-claims-to-the-jwt
// in the useUserStore we check the role that the user has and we can use it to protect routes

import { AuthLayout } from 'ui/components/AuthLayout'
import { useUserStore } from 'ui/global-stores/useUserStore'
import { useSignout } from 'lib/next-apps/hooks/signout'
import Link from 'next/link'

export const ProtectedRoute = () => {
  const user = useUserStore(state => state.user)
  const logOut = useSignout()

  return (
    <AuthLayout>
      <main className="px-6 mt-6 space-y-6">
        <p>You got Role Based Access Control now!</p>

        <p>
          There should be a user in the Zustand store in this page. You should
          be able to fetch more information from Hasura and add that to the
          Zustand store to add through your application.
        </p>
        <div>
          <p>Email: {user?.email}</p>
          <p>Role: {user?.role}</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p>Go to the login result:</p>
          <Link
            className="px-6 py-2 text-sm text-white max-w-xs bg-blue-600 text-center border border-transparent rounded-md  hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
            href="/login-result"
          >
            Login Result
          </Link>

          <p>Or logout:</p>
          <button
            className="px-6 py-2 text-sm text-white max-w-xs bg-blue-600 border border-transparent rounded-md  hover:bg-blue-700 focus:ring-blue-500 disabled:text-accent-disabled disabled:bg-accent-hover"
            type="button"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </main>
    </AuthLayout>
  )
}
