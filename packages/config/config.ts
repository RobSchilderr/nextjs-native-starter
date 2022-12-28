export const IS_IN_PRODUCTION_ENVIRONMENT =
  process.env.NEXT_PUBLIC_APP_STAGE !== 'development'

export const FRONTEND_URL = !IS_IN_PRODUCTION_ENVIRONMENT
  ? 'http://localhost:3001'
  : 'https://yourprodurl.com'

export const APP_ORIGIN_URLS = [
  'capacitor://localhost',
  'http://localhost',
  'capacitor://',
  'client.gigplan.mobile.app',
  'contractor.gigplan.mobile.app',
  'http://192.168.1.4:3001',
  `capacitor://${FRONTEND_URL.split('://')[1]}`,
  `http://${FRONTEND_URL.split('://')[1]}`,
]

export const ALLOWED_CORS_URLS = [
  ...APP_ORIGIN_URLS,
  'http://localhost:3000',
  'http://localhost:3001',
]
