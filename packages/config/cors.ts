import NextCors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from 'next'
import supertokens from 'supertokens-node'
import { ALLOWED_CORS_URLS } from './config'

export const authCors = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: ALLOWED_CORS_URLS,
    credentials: true,
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
  })
}
