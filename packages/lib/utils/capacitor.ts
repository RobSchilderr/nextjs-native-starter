import { Capacitor } from '@capacitor/core'

export const useNativeOS = (): 'android' | 'ios' | 'web' =>
  Capacitor.getPlatform() as 'android' | 'ios' | 'web'
