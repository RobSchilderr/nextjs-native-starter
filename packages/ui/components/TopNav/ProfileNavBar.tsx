// import { NotificationFeed } from 'ui-shared/src/components/Notification/NotificationFeed'

import { useSignout } from 'lib/next-apps/hooks/signout'
import { useUserStore } from '../../global-stores/useUserStore'
import ProfileDropdown from '../ProfileDropdown'

export const ProfileNavBar = () => {
  const user = useUserStore(state => state.user)
  const signout = useSignout()

  return (
    <div>
      <div className="flex items-center">
        <div className="hidden lg:ml-4 lg:flex">
          <ProfileDropdown user={user} onSignout={() => signout()} />
        </div>

        {/* Notifications */}
        <div className="ml-4 flex items-center  md:ml-6">Notifi</div>
      </div>
    </div>
  )
}
