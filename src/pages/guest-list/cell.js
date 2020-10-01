import classNames from 'classnames'

import { Box } from 'components/box'

import styles from './cell.css'

export const Cell = ({ children, className, ...props }) => {
  return (
    <Box
      className={classNames(styles.cell, {
        [className]: Boolean(className),
      })}
      padding={2}
      {...props}
    >
      {children}
    </Box>
  )
}