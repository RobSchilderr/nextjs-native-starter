import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { useGetPersonQuery } from 'graphql-generated/moderator'
import { cn } from 'lib/utils/util'
import { PageLayout } from 'ui/containers/Layout/PageLayout'
import { ProfileInformation } from 'ui/containers/Settings/ProfileInformation'

const secondaryNavigation = [
  { name: 'General', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan', href: '#', icon: CubeIcon, current: false },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Team members', href: '#', icon: UsersIcon, current: false },
]

export const Settings = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

  const user = useGetPersonQuery()

  return (
    <PageLayout>
      <div className="mx-auto  w-full max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
              {secondaryNavigation.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      item.current
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 ',
                    )}
                  >
                    <item.icon
                      className={cn(
                        item.current
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0',
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            {user?.data?.person[0] && (
              <ProfileInformation user={user.data.person[0]} />
            )}
            <div>
              <h2 className="text-base  leading-7 text-gray-900">
                Bank accounts
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Connect bank accounts to your account.
              </p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    TD Canada Trust
                  </div>
                  <button
                    type="button"
                    className=" text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">
                    Royal Bank of Canada
                  </div>
                  <button
                    type="button"
                    className=" text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button
                  type="button"
                  className="text-sm  leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  <span aria-hidden="true">+</span> Add another bank
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base  leading-7 text-gray-900">
                Integrations
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Connect applications to your account.
              </p>

              <ul
                role="list"
                className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6"
              >
                <li className="flex justify-between gap-x-6 py-6">
                  <div className="font-medium text-gray-900">QuickBooks</div>
                  <button
                    type="button"
                    className=" text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </li>
              </ul>

              <div className="flex border-t border-gray-100 pt-6">
                <button
                  type="button"
                  className="text-sm  leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  <span aria-hidden="true">+</span> Add another application
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base  leading-7 text-gray-900">
                Language and dates
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                Choose what language and date format to use throughout your
                account.
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Language
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">English</div>
                    <button
                      type="button"
                      className=" text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Date format
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900">DD-MM-YYYY</div>
                    <button
                      type="button"
                      className=" text-indigo-600 hover:text-indigo-500"
                    >
                      Update
                    </button>
                  </dd>
                </div>
                <Switch.Group as="div" className="flex pt-6">
                  <Switch.Label
                    as="dt"
                    className="flex-none pr-6 font-medium text-gray-900 sm:w-64"
                    passive
                  >
                    Automatic timezone
                  </Switch.Label>
                  <dd className="flex flex-auto items-center justify-end">
                    <Switch
                      checked={automaticTimezoneEnabled}
                      onChange={setAutomaticTimezoneEnabled}
                      className={cn(
                        automaticTimezoneEnabled
                          ? 'bg-indigo-600'
                          : 'bg-gray-200',
                        'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          automaticTimezoneEnabled
                            ? 'translate-x-3.5'
                            : 'translate-x-0',
                          'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
              </dl>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  )
}
