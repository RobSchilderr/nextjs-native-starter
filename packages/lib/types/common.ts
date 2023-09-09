import { GetPersonQuery } from 'graphql-generated/moderator'

export type User = Pick<GetPersonQuery, 'person'>['person'][0]
