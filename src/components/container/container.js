import React from 'react'
import classNames from 'classnames'

import styles from './container.css'

export const Container = ({
  children,
  className,
  container,
  padded,
  style,
}) => {
  return (
    <div
      className={classNames({
        [className]: className,
        [styles.padded]: padded,
        [styles.widthContain]: Boolean(container),
        [styles.xs]: container === `xs`,
        [styles.small]: container === `small`,
        [styles.medium]: container === `medium`,
        [styles.large]: container === `large`,
        [styles.xl]: container === `xl`,
      })}
      style={style}
    >
      {children}
    </div>
  )
}
