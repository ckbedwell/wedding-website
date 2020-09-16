import React, { forwardRef } from 'react'
import classNames from 'classnames'

import { useTheme } from 'utils/useTheme'
import { applyThemeableBoxShadow } from 'utils/applyThemeableBoxShadow'
import { applyThemeableColor } from 'utils/applyThemeableColor'
import { applyThemeableBorders } from 'utils/applyThemeableBorders'
import { applySizing } from 'utils/applySizing'

import styles from './box.css'

const defaultTag = `div`

export const Box = forwardRef(({
  alignItems,
  backgroundColor,
  borders,
  boxShadow,
  center,
  children,
  className,
  direction,
  flex,
  gap,
  justifyContent,
  margin,
  marginBottom,
  padding,
  relative,
  style,
  tag = defaultTag,
  ...rest
}, ref) => {
  const contextTheme = useTheme()
  const { config } = contextTheme
  const Tag = tag

  return (
    <Tag
      className={classNames(styles.box, {
        [className || '']: Boolean(className),
        [styles.horizontal]: direction === `horizontal`,
        [styles.vertical]: direction === `vertical`,
        [styles.center]: center,
        [styles.grow]: flex === `grow`,
        [styles.flexInline]: flex === `inline`,
        [styles.relative]: relative,
        [styles.withGap]: Boolean(gap),
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

    if (backgroundColor) {
      inlineStyles.backgroundColor = applyThemeableColor(backgroundColor, contextTheme)
    }

    if (borders) {
      inlineStyles = {
        ...inlineStyles,
        ...applyThemeableBorders(borders, contextTheme),
      }
    }

    if (boxShadow) {
      inlineStyles.boxShadow = applyThemeableBoxShadow(boxShadow, contextTheme)
    }

    if (marginBottom) {
      inlineStyles.marginBottom = `${marginBottom * factor}${unit}`
    }

    if (padding) {
      inlineStyles = {
        ...inlineStyles,
        ...applySizing({
          size: padding,
          rule: `padding`,
          config,
        }),
      }
    }
    
    if (margin) {
      inlineStyles = {
        ...inlineStyles,
        ...applySizing({
          size: margin,
          rule: `margin`,
          config,
        }),
      }
    }

    if (gap) {
      inlineStyles[`--gap`] = `${gap * factor}${unit}`
    }

    return {
      alignItems,
      justifyContent,
      ...inlineStyles,
      ...style,
    }
  }
})

Box.displayName = 'Text'

Box.defaultProps = {
  tag: defaultTag,
}
