import React from 'react'

import { Link } from 'components/link'
import { Text } from 'components/text'

import styles from './headerTitle.css'
import headerTitle from 'data/headerTitle.json'

export const HeaderTitle = () => {
  return (
    <Link
      className={styles.container}
      to="/"
    >
      <Text
        family="secondary"
        size={7}
      >
        {headerTitle.title}
      </Text>
    </Link>
  )
}
