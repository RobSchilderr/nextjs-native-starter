import {
  getAccessTokenPayloadSecurely,
  getAccessToken,
} from 'supertokens-web-js/recipe/session'
import { useSignout } from '../hooks/signout'
import { HASURA_ENDPOINT } from '../../utils/config'
import { logError } from '../../utils/logError'

/**
 *
 * @param query
 * @param variables
 * @param JWT  JWT token to use for the request, if not provided, the JWT token from the session will be used
 * @returns
 */

export const hasuraUserStoreFetcher =
  <TData, TVariables>(
    query: string,
    variables?: TVariables,
    JWT?: string,
  ): (() => Promise<TData>) =>
  async () => {
    const signOut = useSignout()

    try {
      let jwtToken: string | undefined = ''

      if (!JWT) {
        const accessTokenPayload =
          (await getAccessTokenPayloadSecurely()) as Record<string, string>
        if (accessTokenPayload.sub !== undefined) {
          jwtToken = await getAccessToken()
        } else {
          jwtToken = accessTokenPayload.jwt
        }
      }

      if (JWT) {
        jwtToken = JWT
      }

      if (!jwtToken) {
        await signOut()
      }

      const res = await fetch(HASURA_ENDPOINT as string, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwtToken as string}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
      if (!res) {
        const err = new Error(
          `hasuraClientFetcher: ${JSON.stringify({
            query,
            variables,
          })}`,
        )
        logError(err)
        throw err
      }
      const json = (await res.json()) as {
        data: TData
        errors: { message: string }[]
      }

      if (json.errors) {
        throw new Error(json.errors[0].message)
      }

      return json.data
    } catch (err) {
      logError(err)
      throw err
    }
  }
