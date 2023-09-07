import React from 'react'
import Link from 'next/link'

type Props = {
  title?: string
}

const ErrorPage: React.FC<Props> = ({ title }) => (
  <div className="flex flex-col w-full h-full min-h-screen pt-16 pb-12 bg-white ">
    <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="py-16">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
            Oops something went wrong
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {title || 'Page didnt load'}
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Try again or contact us if the problem persists.
          </p>
          <div className="mt-6">
            <Link href="/">Go back to home</Link>
          </div>
        </div>
      </div>
    </main>
    <footer className="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav className="flex justify-center space-x-4">
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-gray-600"
        >
          Contact Support
        </Link>
      </nav>
    </footer>
  </div>
)

export default ErrorPage
