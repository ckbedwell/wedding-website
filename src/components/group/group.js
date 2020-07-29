import React from 'react'

import { ComponentFactory } from 'components/component-factory'

import styles from './group.css'

export const Group = ({ items }) => {
  return (
    <div className={styles.container}>
      <ComponentFactory items={items} />
    </div>
  )
}
