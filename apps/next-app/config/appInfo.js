import { FRONTEND_URL } from 'lib/utils/config'

export const appInfo = {
  appName: 'SuperTokens Capacitor Demo App',
  apiDomain: FRONTEND_URL,
  websiteDomain: `next.supertokens.app`, // NOTE: this is the same as the appId in the capacitor.config
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
}
