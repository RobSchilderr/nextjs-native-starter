import { CapacitorConfig } from '@capacitor/cli'
import { FRONTEND_URL } from 'lib/utils/config'

// IF you run into CORS issues:
// use this for local development on iOS:
// const FRONTEND_URL_CAPACITOR_IOS = 'http://localhost:3001'
// or change it to your local IP like:
// const FRONTEND_URL_CAPACITOR_IOS ='http://192.000.00.0:3001'

// if necesarry also change your FRONTEND_URL to your local IP.

const config: CapacitorConfig = {
  appId: 'next.supertokens.app',
  appName: 'next-app-supertokens',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    // url: 'http://192.168.1.4:3001',
    // cleartext: true,
    // url: 'http://192.168.0.136:3001',
    cleartext: true,
    hostname: FRONTEND_URL.split('://')[1],
  },

  ios: {
    scheme: 'Supertokens',
  },
}

if (process.argv[3] === 'android') {
  // for android we want to use the default hostname, but for iOS we have to use the custom hostname due to 3th party cookies issue in webkit (Supertokens might release a non-cookie based solution in the future)

  // eslint-disable-next-line @typescript-eslint/dot-notation
  delete config['server']
}

export default config
