import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

// import styles from './link.css'

export const Link = ({ children, to }) => {
  return (
    <RouterLink to={to}>
      {children}
    </RouterLink>
  )
}
