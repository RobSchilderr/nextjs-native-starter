import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'next.supertokens.app',
  appName: 'next-app-supertokens',
  webDir: 'out',
  bundledWebRuntime: false,
  ios: {
    scheme: 'Supertokens',
  },
}

export default config
