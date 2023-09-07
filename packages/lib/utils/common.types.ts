export type Platform = 'WEB' | 'APP' | 'ALL'

/**
 * Used to swap recipes that SuperTokens uses to provide auth functionality
 *
 * emailpassword: Simple email + password based login
 * thirdparty: Social login (Google, Apple etc)
 * thirdpartyemailpassword: Combination of emailpassword and thirdparty
 * passwordless: Passwordless login a code (sent via email by default but configurable)
 * thirdpartypasswordless: Combination of thirdparty and passwordless
 */
export type AuthMode =
  | 'thirdparty'
  | 'passwordless'
  | 'thirdpartypasswordless'
  | 'emailpassword'
  | 'thirdpartyemailpassword'

// todo: I have to change the registration flow to support email password, also requires lost pass flow
