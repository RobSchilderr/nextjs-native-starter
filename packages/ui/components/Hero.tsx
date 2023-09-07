// @ts-nocheck -- file gonna be removed soon
// @ts-ignore

import { Container } from './Container'
import { useRouter } from 'next/router'

// READ BEFORE UNCOMMENTING: Make sure to add a database record with a posts table for this to work. To do this from the console, check Step 3 from this link: https://hasura.io/docs/latest/getting-started/docker-simple/
// Also: the JWT authentication with Hasura and Supertokens is not done yet. I just added an anonymous role for now. Might continue later.

// import {
//   useGetPostsQuery,

// } from 'graphql-generated/anonymous'
// Define a state to handle
export function Hero() {
  const router = useRouter()
  const handleButtonClick = (route: string) => {
    setIsLoading(true)
    router.push(route)
  }
  //   data: postsData,
  // } = useGetPostsQuery()

  // console.log('postsData', postsData)
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
