import React from 'react'

import { NavLink } from './navLink'

import styles from './navigation.css'

export const Navigation = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(({ label, href }) => {
        return (
          <NavLink
            className={styles.navLink}
            href={href}
            key={href}
          >
            {label}
          </NavLink>
        )
      })}
    </div>
  )
}
