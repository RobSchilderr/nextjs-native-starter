import { Role_Enum } from 'graphql-generated/admin'

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
