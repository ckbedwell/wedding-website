import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './link.css'

export const Link = ({
  children,
  className,
  bodyLink,
  ...props
}) => {
  return (
    <RouterLink
      className={classNames(styles.link, {
        [className]: Boolean(className),
        [styles.bodyLink]: bodyLink,
      })}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
