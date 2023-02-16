// import { NextApiRequest, NextApiResponse } from 'next'
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { verifySession } from 'supertokens-node/recipe/session/framework/express'
import supertokens from 'supertokens-node'
import { authCors } from 'lib/utils/cors'
import { getBackendConfig } from '../../../config/backendConfig'

supertokens.init(getBackendConfig())

export default async function user(req: any, res: any) {
  await authCors(req, res)

  await superTokensNextWrapper(
    async next => verifySession()(req, res, next),
    req,
    res,
  )

  return res.json({
    note: 'Fetch any data from your application for authenticated user after using verifySession middleware',
    userId: req.session.getUserId(),
    sessionHandle: req.session.getHandle(),
    accessTokenPayload: req.session.getAccessTokenPayload(),
  })
}
