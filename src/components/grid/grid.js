import React from 'react'
import classNames from 'classnames'

import { useTheme } from '../../utils/useTheme'

import styles from './grid.css'

const defaultTag = `div`
const defaultColumns = 1
const defaultItemSize = `1fr`

export const Grid = React.forwardRef(({
  autoFill,
  autoFit,
  children,
  className,
  columns = defaultColumns,
  gap,
  itemSize = defaultItemSize,
  style,
  tag = defaultTag,
  ...rest
}, ref) => {
  const Tag = tag
  const contextTheme = useTheme()
  const { config } = contextTheme

  return (
    <Tag
      className={classNames(styles.grid, {
        [className || '']: Boolean(className),
      })}
      ref={ref}
      style={getInlineStyles()}
      {...rest}
    >
      {children}
    </Tag>
  )

  function getInlineStyles() {
    const { factor, unit } = config.spacing
    let inlineStyles = {}

    if (gap) {
      inlineStyles.gridGap = `${gap * factor}${unit}`
    }

    let gridTemplateColumns = columns

    if (typeof columns === 'number') {
      gridTemplateColumns = `repeat(${columns}, ${itemSize})`
    }

    if (autoFill) {
      gridTemplateColumns = `repeat(auto-fill, minmax(1px, ${itemSize}))`
    }

    if (autoFit) {
      gridTemplateColumns = `repeat(auto-fit, minmax(1px, ${itemSize}))`
    }

    return {
      gridTemplateColumns,
      ...inlineStyles,
      ...style,
    }
  }
})

Grid.displayName = `Grid`

Grid.defaultProps = {
  columns: defaultColumns,
  itemSize: defaultItemSize,
  tag: defaultTag,
}
