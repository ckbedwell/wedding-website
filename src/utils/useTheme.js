import React from 'react'
import { ThemeContext } from '../components/theme-provider'

export function useTheme() {
  const theme = React.useContext(ThemeContext)

  return theme
}