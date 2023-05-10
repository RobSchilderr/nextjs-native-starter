import { NEXT_PUBLIC_HASURA_ENDPOINT } from 'lib/utils/config'
// import { logError } from '../shared/utils/logError'

export const hasuraAnonymousFetcher =
  <TData, TVariables>(
    query: string,
    variables?: TVariables,
  ): (() => Promise<TData>) =>
  async () => {
    try {
      const res = await fetch(NEXT_PUBLIC_HASURA_ENDPOINT as string, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })

      if (!res) {
        const err = new Error(
          `hasuraAnonymousFetcher: ${JSON.stringify({ query, variables })}`,
        )
        // logError(err)
        throw err
      }
      const json = await res.json()

      if (json.errors) {
        const { message } = json.errors[0] || 'Error..'
        // same format as hasura

        throw message
      }

      return json.data
    } catch (err: any) {
      console.error(err)
      // logError(err)
      throw err
    }
  }
