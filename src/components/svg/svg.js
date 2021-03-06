import classNames from 'classnames'

import styles from './svg.css'

export const Svg = ({
  block,
  className,
  color = 'currentColor',
  icon,
  size: [
    width = `1em`,
    height = width,
  ] = [],
}) => (
  <svg
    className={classNames(styles.svg, {
      [className]: className,
    })}
    style={{
      color,
      display: block ? 'block' : 'inline',
      height,
      width,
    }}
  >
    <use xlinkHref={`/sprite.svg#${icon}`} />
  </svg>
)
