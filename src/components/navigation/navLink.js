import React from 'react'
import classNames from 'classnames'

import { Link } from 'components/link'
import { Text } from 'components/text'

import styles from './navLink.css'

export const NavLink = ({
  children,
  className,
  href,
}) => {
  return (
    <Link
      className={classNames(styles.container, {
        [className]: className,
      })}
      to={href}
    >
      <Text
        family="primary"
        size={3}
      >
        {children}
      </Text>
    </Link>
  )
}
