import * as z from 'zod'

export const Role_Enum = z.enum(['moderator', 'admin']) // get this from graphql schema
export type Role_Enum = z.infer<typeof Role_Enum> // get this from graphql schema
export const allowedRoles = ['moderator', 'admin'] as Role_Enum[] // get this from graphql schema

export type SessionVariables = {
  'x-hasura-user-id': string
  'x-hasura-default-role': Role_Enum
  'x-hasura-role': Role_Enum[]
}

export type Payload = {
  'https://hasura.io/jwt/claims': SessionVariables & {
    [key: string]: any
  }
}
