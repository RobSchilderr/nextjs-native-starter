/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next'

export const eventAuthentication =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    const secret =
      req.headers['x-event-secret'] || req.headers['x-hasura-event-secret']

    if (!secret || secret !== process.env.EVENT_SECRET) {
      return res.status(403).json({ message: 'Invalid secret' })
    }
    return handler(req, res)
  }
