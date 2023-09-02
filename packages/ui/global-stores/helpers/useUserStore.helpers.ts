import { Role_Enum } from 'lib/utils/authUtils'
import { logError } from 'lib/utils/logError'

export async function getUserFromDatabase() {
  try {
    // in reality you would do a query to your database here:
    const user: {
      id: string
      email: string
      role: Role_Enum
    } = {
      id: '1',
      email: 'test@test.com',
      role: 'admin',
    }
    return user
  } catch (err) {
    logError(err)

    return null
  }
}
