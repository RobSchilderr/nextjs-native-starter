import { useMediaQuery } from 'react-responsive'

export type ScreenTypes =
  | 'largeScreen'
  | 'mediumScreen'
  | 'smallScreen'
  | 'mobile'

export const useScreenType = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 })
  const isMediumScreen = useMediaQuery({ minWidth: 768 })
  const isSmallScreen = useMediaQuery({ minWidth: 640 })

  if (isLargeScreen) {
    return 'largeScreen'
  }
  if (isMediumScreen) {
    return 'mediumScreen'
  }
  if (isSmallScreen) {
    return 'smallScreen'
  }

  return 'mobile'
}
