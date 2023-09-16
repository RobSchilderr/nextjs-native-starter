export const ProfileInformation = () => (
  <div>
    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
    <p className="mt-1 text-sm leading-6 text-gray-500">
      This information will be displayed publicly so be careful what you share.
    </p>

    <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
      <div className="pt-6 sm:flex">
        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
          Email address
        </dt>
        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
          <div className="text-gray-900">tom.cook@example.com</div>
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
          Title
        </dt>
        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
          <div className="text-gray-900">Human Resources Manager</div>
          <button
            type="button"
            className=" text-indigo-600 hover:text-indigo-500"
          >
            Update
          </button>
        </dd>
      </div>
    </dl>
  </div>
)
