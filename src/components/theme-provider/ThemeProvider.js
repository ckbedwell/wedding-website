import React from 'react'

import { defaultConfig } from './defaultConfig'

export const ThemeContext = React.createContext({
  config: defaultConfig,
  mode: ``,
})

export const ThemeProvider = ({
  children,
  config,
  mode = `light`,
}) => {
  return (
    <ThemeContext.Provider
      value={{
        mode,
        config,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
