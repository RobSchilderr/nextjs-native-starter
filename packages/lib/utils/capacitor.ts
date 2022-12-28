import { Capacitor } from '@capacitor/core'

export const useNativeOS = (): 'android' | 'ios' | 'web' =>
  Capacitor.getPlatform() as 'android' | 'ios' | 'web'

export const usePlatform = (): 'APP' | 'WEB' =>
  Capacitor.isNativePlatform() ? 'APP' : 'WEB'

// export const openAppBrowser = async (url: string) => {
//   await Browser.open({ url, toolbarColor: '#bae6fd' })
// }

// export const pickImages = async ({ limit }: { limit: number }) => {
//   const images = await Camera.pickImages({
//     quality: 100,
//     limit,
//   })

//   return images
// }
