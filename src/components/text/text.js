import React from 'react'
import classNames from 'classnames'

import styles from './text.css'

export const Text = ({
  children,
  className,
  color,
  factorial = 6,
  family = `primary`,
  size,
  style = {},
  tag,
  textAlign,
  ...props
}) => {
  const Tag = tag || `div`

  return (
    <Tag
      className={classNames(styles.container, {
        [className]: className,
        [styles.primary]: family === `primary`,
        [styles.secondary]: family === `secondary`,
      })}
      style={{
        color,
        fontSize: `${(size * factorial) / 10}rem`,
        textAlign,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
