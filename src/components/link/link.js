import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './link.css'

export const Link = ({
  children,
  className,
  ...props
}) => {
  return (
    <RouterLink
      className={classNames(styles.link, {
        [className]: Boolean(className),
      })}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
