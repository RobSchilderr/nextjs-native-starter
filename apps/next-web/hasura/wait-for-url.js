/* eslint-disable no-console */
const fetch = require('node-fetch')

async function checkForGraphQL(url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'myadminsecretkey',
      },
      body: JSON.stringify({
        query: 'query personCount { person_aggregate { aggregate { count } } }',
      }),
    })

    const resData = await response.json()
    if (resData?.data?.person_aggregate?.aggregate?.count >= 0) {
      process.stdout.write(
        `found person(${resData.data.person_aggregate.aggregate.count})\n`,
      )
      return true
    }
    return true
  } catch (error) {
    if (error.message.match(/(ECONNREFUSED|ECONNRESET|socket hang up)/)) {
      process.stdout.write('.')
    } else {
      console.log('-- error: ', error)
    }
  }
  return false
}

async function waitForGraphQL(url) {
  let counter = 0
  const id = setInterval(async () => {
    const gotResponse = await checkForGraphQL(url)
    if (gotResponse) {
      clearInterval(id)
      return true
    }
    counter += 1
    if (counter > 300) {
      console.log('wait-for-url.js: checkForGraphQL - TIMEOUT')
      process.exit(1)
    }
  }, 500)
}

// main
waitForGraphQL('http://localhost:8080/v1/graphql')
  .then(() => {
    process.stdout.write('graphQl service is up and running\n')
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
