/* eslint-disable react/require-default-props */
// import { captureException } from 'lib/next-apps/shared/sentry'
import React from 'react'

import { useRouter } from 'next/router'
import NoAccountLayout from '../Auth/NoAccountLayout'

type Props = {
  pageTitle: string
  children: React.ReactNode
}

const RegisterLayout = ({ children, pageTitle }: Props) => {
  const router = useRouter()

  const isSuccess = router?.query?.step === 'success'

  return (
    <NoAccountLayout withReturn={!isSuccess} pageTitle={pageTitle}>
      <div className="w-full min-h-full ">
        <div className="relative flex flex-col flex-1 w-full h-full min-w-full px-4 mx-auto sm:w-full sm:max-w-2xl lg:px-8">
          <div className="relative w-full h-full pt-6 mx-auto sm:max-w-2xl">
            {children}
          </div>
        </div>
      </div>
    </NoAccountLayout>
  )
}
export default RegisterLayout
