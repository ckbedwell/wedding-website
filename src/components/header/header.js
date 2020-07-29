import React from 'react'

import { Navigation } from 'components/navigation'
import { HeaderTitle } from 'components/header'

import styles from './header.css'
import navigation from 'data/navigation.json'

export const Header = () => {
  const navLength = navigation.length / 2
  const nav1 = navigation.slice(0, navLength)
  const nav2 = navigation.slice(navLength, navigation.length)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Navigation items={nav1} />
        <HeaderTitle />
        <Navigation items={nav2} />
      </div>
    </div>
  )
}
