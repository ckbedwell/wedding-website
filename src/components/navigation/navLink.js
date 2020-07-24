import React from 'react'
import { Link } from 'components/link'

export const NavLink = ({ children, href }) => {
  return (
    <Link to={href}>
      {children}
    </Link>
  )
}
