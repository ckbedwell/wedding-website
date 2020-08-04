import React from 'react'

import { NavLink } from './navLink'

import styles from './pullout-navigation.css'
import navigation from 'data/navigation.json'

export const PulloutNavigation = () => {
  return navigation.map(({ label, href }) => {
    return (
      <NavLink
        className={styles.navLink}
        href={href}
        key={href}
      >
        {label}
      </NavLink>
    )
  })
}
