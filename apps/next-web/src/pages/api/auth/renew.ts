/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import { NextApiResponse } from 'next'
import { Response } from 'express'
import supertokens from 'supertokens-node'
import { SessionRequest } from 'supertokens-node/framework/express'
import { JSONObject } from 'supertokens-node/types'
import { authCors } from 'lib/utils/cors'
import { createNewSessionPayload } from 'lib/next-apps/api/auth/createNewSessionPayload'
import { logError } from 'lib/utils/logError'
import { getBackendConfig } from 'config/backendConfig'

supertokens.init(getBackendConfig())

export default async function renew(
  req: SessionRequest,
  res: NextApiResponse & Response,
) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  // we first verify the session
  // @ts-ignore -- fix this type error
  await authCors(req, res)
  await superTokensNextWrapper(
    async next => verifySession()(req, res, next),
    req,
    res,
  )

  if (!req.session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  // if it comes here, it means that the session verification was successful
  try {
    const session = req.session as SessionRequest['session']

    if (session) {
      const newSessionPayload = await createNewSessionPayload({
        userContext: {},
        userId: session.getUserId(),
        sessionDataInDatabase: session.getSessionDataFromDatabase(),
      })

      await session.mergeIntoAccessTokenPayload(newSessionPayload as JSONObject)
      // await session.updateAccessTokenPayload(newSessionPayload, {})
    }

    return res.status(200).send('ok')
  } catch (err) {
    logError(err)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
