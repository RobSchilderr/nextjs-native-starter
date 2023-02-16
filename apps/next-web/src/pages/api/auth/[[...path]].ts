/* eslint-disable import/no-extraneous-dependencies */
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { middleware } from 'supertokens-node/framework/express'
import { NextApiRequest, NextApiResponse } from 'next'
import { Request, Response } from 'express'
import { authCors } from 'lib/utils/cors'
import supertokens from 'supertokens-node'
import { getBackendConfig } from '../../../../config/backendConfig'

supertokens.init(getBackendConfig())

export default async function superTokens(
  req: NextApiRequest & Request,
  res: NextApiResponse & Response,
) {
  // NOTE CAPACITOR SPECIFIC: We need CORS only if we are querying the APIs from a different origin
  await authCors(req, res)

  await superTokensNextWrapper(
    async next => {
      // This is needed for production deployments with Vercel
      res.setHeader(
        'Cache-Control',
        'no-cache, no-store, max-age=0, must-revalidate',
      )
      await middleware()(req, res, next)
    },
    req,
    res,
  )
  if (!res.writableEnded) {
    res.status(404).send('Not found')
  }
}
