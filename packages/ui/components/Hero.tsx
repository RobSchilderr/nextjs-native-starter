import { Container } from './Container'
import { useRouter } from 'next/router'

export function Hero() {
  const router = useRouter()
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <div className="flex flex-col space-y-6">
        <button
          type="button"
          onClick={() => {
            console.log('clicked')
            router.push('/register')
          }}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Go to register
        </button>

        <button
          type="button"
          onClick={() => {
            console.log('clicked')
            router.push('/login')
          }}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Go to login
        </button>

        <button
          type="button"
          onClick={() => {
            router.push('/login-result')
          }}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Go to login result
        </button>
      </div>
    </Container>
  )
}
