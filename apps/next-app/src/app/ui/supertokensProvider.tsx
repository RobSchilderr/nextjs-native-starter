'use client'

import React from 'react'
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react'
import { usePathname, useRouter } from 'next/navigation'
import capacitorCookieHandler from 'lib/utils/capacitorCookieHandler'
import { getFrontendConfig, setRouter } from '../../../config/frontendConfig'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init({
    ...getFrontendConfig(),

    /*
     * 1. Important Capacitor note:
     * This section deals with a challenge faced while working with SDKs in the context of frameworks like Electron/Tauri and Capacitor.
     * These frameworks add an abstraction layer on top of the browser logic, which causes issues with how the SDK uses frontend cookies for information storage.
     * Because of this, a cookie handler is necessary, regardless of the token transfer method specified in the frontendConfig.
     *
     * In this instance, we are using the 'capacitorCookieHandler' to handle cookies.
     */
    cookieHandler: capacitorCookieHandler,
    enableDebugLogs: true,
  })
}

export const SuperTokensProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  setRouter(useRouter(), usePathname() || window.location.pathname)

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>
}
