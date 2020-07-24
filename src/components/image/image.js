import React from 'react'
import classNames from 'classnames'

import styles from './image.css'

export const Image = ({ src, type }) => {
  if (type === 'cover') {
    return (
      <div
        className={classNames(styles.cover)}
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
    )
  }

  return (
    <img
      src={src}
    />
  )
}