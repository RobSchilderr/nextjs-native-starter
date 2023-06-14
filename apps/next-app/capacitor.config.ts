import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'next.supertokens.app',
  appName: 'next-app-supertokens',
  webDir: 'out',
  // For live reload: comment out server. Issue: Auth stops working.
  // server: {
  //   url: 'http://YOUR_IP:3001',
  // },
  bundledWebRuntime: false,
}

export default config
