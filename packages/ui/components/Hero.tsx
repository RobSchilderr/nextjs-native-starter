import Link from 'next/link'
import { Container } from './Container'

export const Hero = () => (
  <Container className="pt-20 pb-16 text-center lg:pt-32">
    <div className="flex flex-col space-y-6">
      <Link
        href="/register"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      >
        Go to register
      </Link>

      <Link
        href="/login"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      >
        Go to login
      </Link>

      <Link
        href="/login-result"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      >
        Go to login result
      </Link>
    </div>
  </Container>
)
