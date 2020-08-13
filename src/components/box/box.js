import React from 'react'
import classNames from 'classnames'

import styles from './box.css'

export const Box = ({
  children,
  factor = 6,
  flex,
  gap,
}) => {
  return (
    <div
      className={classNames({
        [styles.flex]: flex,
      })}
      style={{
        '--gap': `${(gap * factor) / 10}rem`,
      }}
    >
      {children}
    </div>
  )
}
