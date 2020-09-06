import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './link.css'

export const Link = ({
  bodyLink,
  children,
  className,
  onClick,
  to,
  ...rest
}) => {
  const props = {
    className: classNames(styles.link, {
      [className]: Boolean(className),
      [styles.bodyLink]: bodyLink,
    }),
    onClick: handleClick,
    ...rest,
  }

  if (!to) {
    return children
  }

  if (
    to.startsWith(`mailto:`) ||
    to.startsWith(`http`)
  ) {
    return (
      <a
        {...props}
        href={to}
      >
        {children}
      </a>
    )
  }

  return (
    <RouterLink
      {...props}
      to={to}
    >
      {children}
    </RouterLink>
  )

  function handleClick() {
    onClick && onClick()
    window.scrollTo(0, 0)
  }
}
