// components/Success.tsx

import { useRouter } from 'next/router'

export default function Success() {
  const router = useRouter()

  return (
    <div>
      <p>Successfully registered!</p>
      <button
        className="mt-6  text-blue-600 underline"
        onClick={() => router.push('/myaccount')}
      >
        Go to My Account
      </button>
    </div>
  )
}
