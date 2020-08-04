import { useMediaQuery } from 'react-responsive'

export const DESKTOP_KEY = `desktop`
export const TABLET_KEY = `tablet`
export const MOBILE_KEY = `mobile`

const tabletSize = 992
const mobileSize = 520

const mediaQueries = {
  desktop: {
    min: tabletSize + 1,
    max: 9999,
  },
  tablet: {
    min: mobileSize + 1,
    max: tabletSize,
  },
  mobile: {
    min: 1,
    max: mobileSize,
  },
}

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ 
    minWidth: mediaQueries.desktop.min,
  })

  return isDesktop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    minWidth: mediaQueries.tablet.min,
    maxWidth: mediaQueries.tablet.max,
  })

  return isTablet ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    maxWidth: mediaQueries.mobile.max,
  })

  return isMobile ? children : null
}

export const Responsive = ({ children, deviceRange = [] }) => {
  const [largest, smallest] = deviceRange

  const isInDeviceSelection = useMediaQuery({
    minWidth: mediaQueries[smallest].min,
    maxWidth: mediaQueries[largest].max,
  })

  return isInDeviceSelection ? children : null
}
