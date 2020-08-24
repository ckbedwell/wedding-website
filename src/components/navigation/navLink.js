import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { closePullout } from 'store/pullout-slice'
import { Link } from 'components/link'
import { Text } from 'components/text'

import styles from './navLink.css'

export const NavLink = ({
  children,
  className,
  href,
}) => {
  const location = useLocation()
  const dispatch = useDispatch()

  return (
    <Link
      className={classNames(styles.container, {
        [className]: className,
        [styles.active]: href === location.pathname,
      })}
      onClick={handleClick}
      to={href}
    >
      <Text
        family={`primary`}
        size={5}
      >
        {children}
      </Text>
    </Link>
  )

  function handleClick() {
    dispatch(closePullout())
  }
}
