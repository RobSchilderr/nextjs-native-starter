import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'next.supertokens.app',
  appName: 'next-app-supertokens',
  webDir: 'out',
  // For live reload: comment out server.
  // server: {
  //   url: 'http://YOUR_IP:3001',
  // },
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: true, // Set this to false to maintain splash screen on screen and fetch data for example on startup
    },
  },
}

export default config
