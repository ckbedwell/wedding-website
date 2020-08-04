import React from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { closePullout } from 'store/pullout-slice'
import { Link } from 'components/link'
import { Text } from 'components/text'

import styles from './navLink.css'

export const NavLink = ({
  children,
  className,
  href,
}) => {
  const dispatch = useDispatch()

  return (
    <Link
      className={classNames(styles.container, {
        [className]: className,
      })}
      onClick={handleClick}
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

  function handleClick() {
    dispatch(closePullout())
  }
}
