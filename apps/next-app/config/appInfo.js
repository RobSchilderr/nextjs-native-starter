import { APP_BUNDLE_URL, FRONTEND_URL } from 'lib/utils/config'

export const appInfo = {
  appName: 'SuperTokens Capacitor Demo App',
  apiDomain: FRONTEND_URL,
  websiteDomain: APP_BUNDLE_URL, // NOTE: this is the same as the appId in the capacitor.config
  apiBasePath: '/api/auth',
  websiteBasePath: '/auth',
}
