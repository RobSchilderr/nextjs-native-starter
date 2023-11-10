'use client'

import React from 'react'
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react'
import { usePathname, useRouter } from 'next/navigation'
import { getFrontendConfig, setRouter } from '../../../config/frontendConfig'

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(getFrontendConfig())
}

export const SuperTokensProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  setRouter(useRouter(), usePathname() || window.location.pathname)

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>
}
