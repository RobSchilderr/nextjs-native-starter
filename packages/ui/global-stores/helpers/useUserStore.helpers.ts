import {
  GetPersonDocument,
  GetPersonQuery,
  GetPersonQueryVariables,
} from 'graphql-generated/moderator'
import { hasuraUserFetcher } from 'lib/next-apps/fetchers/hasuraUserFetcher'
import { logError } from 'lib/utils/logError'

export async function getUserFromDatabase() {
  try {
    const person = await hasuraUserFetcher<
      GetPersonQuery,
      GetPersonQueryVariables
    >(GetPersonDocument)()

    return person
  } catch (err) {
    logError(err)

    return null
  }
}
