import supertokens from 'supertokens-node'

export const getUserById = async (userId: string) => supertokens.getUser(userId)
