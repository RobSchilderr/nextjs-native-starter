/**
 * @description redirect auth page to app page
 */
import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'
import { APP_BUNDLE_URL } from 'lib/utils/config'

// TODO: add deeplink.

export default async function redirectAuthUrl(
  req: NextApiRequest & Request,
  res: NextApiResponse & Response,
) {
  // NOTE: We need CORS only if we are querying the APIs from a different origin
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
  })
  console.log('came here')
  console.log(req.query)

  if (req.query?.token) {
    const redirectUrl = `${APP_BUNDLE_URL}://auth/reset-password?token=${req.query.token}&rid=thirdpartyemailpassword`
    return res.redirect(redirectUrl)
  }

  const code = req.query?.code ?? null
  console.log(code)
  if (req.query?.provider && code) {
    const redirectUrl = `${APP_BUNDLE_URL}://auth/callback/${req.query.provider}?code=${code}&state=${req.query.state}`
    console.log(redirectUrl)

    return res.redirect(redirectUrl)
  }

  return res.redirect(`${APP_BUNDLE_URL}://`)
}
