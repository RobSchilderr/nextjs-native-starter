export const PROD_URL_NO_HTTPS = 'yourprodurl.com'

export const IS_IN_PRODUCTION_ENVIRONMENT = false

export const FRONTEND_URL = !IS_IN_PRODUCTION_ENVIRONMENT
  ? 'http://localhost:3001'
  : `https://${PROD_URL_NO_HTTPS}`

export const APP_BUNDLE_URL = `next.supertokens.app` // used to create the deep link

export const REDIRECT_URL = !IS_IN_PRODUCTION_ENVIRONMENT
  ? FRONTEND_URL
  : 'https://yourprodurl.vercel.app'

export const APP_ORIGIN_URLS = [
  'capacitor://localhost',
  'http://localhost',
  'capacitor://',
  `capacitor://${FRONTEND_URL.split('://')[1]}`,
  `http://${FRONTEND_URL.split('://')[1]}`,
]

export const ALLOWED_CORS_URLS = [
  ...APP_ORIGIN_URLS,
  'http://localhost:3000',
  'http://localhost:3001',
]
