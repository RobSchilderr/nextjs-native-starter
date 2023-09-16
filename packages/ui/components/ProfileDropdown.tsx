import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getInitialNameAvatar } from 'lib/utils/util'
import { MenuLink } from 'ui/components/MenuLink'
import { MenuButton } from 'ui/components//MenuButton'

type Props = {
  onSignout: () => Promise<void>
}

const ProfileDropdown = ({ onSignout }: Props) => {
  const userName = 'Test User'
  const userAvatar = getInitialNameAvatar(userName)

  return (
    <Menu as="div" className="relative z-30">
      {({ open }) => (
        <>
          {userName && (
            <div>
              <Menu.Button className="flex max-w-xs items-center rounded-full text-sm text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:rounded-md lg:p-2">
                {userAvatar && (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={userAvatar}
                    alt=""
                  />
                )}
                <span className="ml-3 hidden text-sm font-medium text-gray-800 lg:block">
                  <span className="sr-only">Open menu for</span>
                  {userName}
                </span>
                <ChevronDownIcon
                  className="ml-1 hidden h-5 w-5 flex-shrink-0 text-white lg:block"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
          )}
          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <MenuLink
                    classNameHref="text-gray-700 text-left"
                    activeMenuState={active}
                    href="/account"
                  >
                    <span>My account</span>
                  </MenuLink>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <MenuButton
                    index={1}
                    disabled={false}
                    activeMenuState={active}
                    onClick={onSignout}
                  >
                    <span>Sign out</span>
                  </MenuButton>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ProfileDropdown
