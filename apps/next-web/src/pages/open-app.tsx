import qs from 'qs'
import { GetServerSideProps } from 'next/types'
import { APP_BUNDLE_URL } from 'lib/utils/config'
import React from 'react'

const OpenAppPage: React.FC = () => <p className="text-gray-600">Loading..</p>

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  const queryParams = qs.stringify(query)

  res.statusCode = 302
  res.setHeader('Location', `${APP_BUNDLE_URL}://${queryParams}`) // Replace <link> with your url link
  return { props: {} }
}

export default OpenAppPage
