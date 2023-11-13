// todo: refactor this page to app router

/**
 * @description redirect auth page to app page
 */
import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { APP_BUNDLE_URL } from 'lib/utils/config'

export default async function redirectAuthUrl(
  req: NextApiRequest & Request,
  res: NextApiResponse & Response,
) {
  // NOTE: We need CORS only if we are querying the APIs from a different origin
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
  })

  if (req.query?.token) {
    const redirectUrl = `${APP_BUNDLE_URL}://auth/reset-password?token=${req.query.token}&rid=thirdpartyemailpassword`
    return res.redirect(redirectUrl)
  }

  const code = req.query?.code ?? null
  if (req.query?.provider && code) {
    let queryClone = { ...req.query }
    // Remove the provider query since we use that for the path
    delete queryClone.provider

    // Create a query string that consumes all current query params from the url
    let queryParts: string[] = []
    Object.keys(queryClone).forEach(key => {
      // We need to URL encode the value of the query to make it URL friendly
      queryParts.push(`${key}=${encodeURIComponent(queryClone[key] as string)}`)
    })

    // Combine all current query params in a single string
    let queryString = queryParts.length === 0 ? '' : queryParts.join('&')

    // if you get an issue with 'invalid state' maybe change the '&' back to '?'. At least this works locally:
    const redirectUrl = `${APP_BUNDLE_URL}://auth/callback/${req.query.provider}&${queryString}`
    return res.redirect(redirectUrl)
  }

  return res.redirect(`${APP_BUNDLE_URL}://`)
}
