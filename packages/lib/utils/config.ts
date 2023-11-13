import { AuthMode } from './common.types'

export const PROD_URL_NO_HTTPS = 'nextjs-native-starter-app.vercel.app'

export const IS_IN_PRODUCTION_ENVIRONMENT =
  process.env.NEXT_PUBLIC_APP_STAGE !== 'development'

// if you want to test social auth on your native device, set the API server to be your local IP address (so instead of http://localhost:3001, it would be  http://000.000.0.0:3001)
export const FRONTEND_URL = !IS_IN_PRODUCTION_ENVIRONMENT
  ? 'http://localhost:3001'
  : `https://${PROD_URL_NO_HTTPS}`

export const APP_BUNDLE_URL = `next.supertokens.app` // used to create the deep link

export const REDIRECT_URL = !IS_IN_PRODUCTION_ENVIRONMENT
  ? FRONTEND_URL
  : 'https://nextjs-native-starter-app-git-main-robschilderr.vercel.app'

export const APP_ORIGIN_URLS = [
  'capacitor://localhost',
  'http://localhost',
  'ionic://localhost',
  `ionic://${FRONTEND_URL.split('://')[1]}`,
  `next.supertokens.app`,
  'capacitor://',
  `capacitor://${FRONTEND_URL.split('://')[1]}`,
  `http://${FRONTEND_URL.split('://')[1]}`,
]

export const ALLOWED_CORS_URLS = [
  ...APP_ORIGIN_URLS,
  'capacitor://nextjs-native.dev',
  'http://localhost:3000',
  'http://localhost:3001',
  'https://www.nextjs-native.dev',
  'https://nextjs-native.dev',
  'https://nextjs-native-git-main-robschilderr.vercel.app',
  'http://localhost',
]

export const AUTH_MODE: AuthMode = 'thirdpartypasswordless'
