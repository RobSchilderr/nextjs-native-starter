import { logError } from 'lib/utils/logError'
import type { NextApiRequest, NextApiResponse } from 'next'
import { eventAuthentication } from 'lib/next-apps/api/middleware/eventAuthentication'
import * as z from 'zod'
import sdk from 'lib/next-apps/fetchers/graphqlSdk'
import { Role_Enum } from 'graphql-generated/admin'
import { getUserById } from 'lib/utils/supertokensNodeUtilities'

/**
 * @description Register a new user
 */

const bodySchema = z.object({
  input: z.object({
    object: z.object({
      givenName: z.string().min(2, {
        message: 'A valid first name is required',
      }),
      supertokensUserId: z.string(),
      deviceToken: z.string().optional(),
      marketingSource: z.string().optional(),
    }),
  }),
})

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { input } = req.body as z.infer<typeof bodySchema>
  try {
    const body = bodySchema.safeParse(req.body)

    if (!body.success) {
      return res.status(400).json({
        message: body.error.issues[0].message,
        extensions: {
          ...body.error.issues[0],
        },
      })
    }
    const values = input.object

    const userInfo = await getUserById(values.supertokensUserId)

    const personResponse = await sdk.InsertPerson({
      variables: {
        email: userInfo?.email,
        given_name: values.givenName,
        role: Role_Enum.Moderator,
      },
    })

    if (!personResponse.data?.insert_person_one?.id) {
      logError(
        'No person id returned from insert_person_one mutation, personResponse:',
        personResponse,
      )
      throw new Error('Could not create person')
    }

    return res.status(200).json({
      success: true,
    })
  } catch (err) {
    logError(err)
    return res.status(400).json({
      message: 'Er is iets mis gegaan',
    })
  }
}

export default eventAuthentication(registerHandler)
