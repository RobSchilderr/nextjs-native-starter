import { FRONTEND_URL } from 'config/config'

export const appInfo = {
  appName: 'SuperTokens Capacitor Demo App',
  apiDomain: FRONTEND_URL,
  websiteDomain: `client.gigplan.mobile.app`, // NOTE: this is the same as the appId in the capacitor.config
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
}
