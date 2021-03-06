import classNames from 'classnames'

import styles from './text.css'

export const Text = ({
  children,
  className,
  color,
  factor = 4,
  family = `primary`,
  fontWeight,
  lineHeight,
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
        [styles.handWriting]: family === `handwriting`,
      })}
      style={{
        color,
        fontSize: `${(size * factor) / 10}rem`,
        fontWeight,
        lineHeight,
        textAlign,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
