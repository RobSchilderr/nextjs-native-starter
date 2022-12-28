import React from 'react'

import HelloWorld from '@src/components/HelloWorld'
import Head from 'next/head'
import { CoolInterface } from 'server/src/lib/CoolInterface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coolKid: CoolInterface = {
  amICool: false,
}

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <HelloWorld />
      <div className="bg-yellow-200 h-12 w-12" />
    </main>
  </div>
)

export default Home
