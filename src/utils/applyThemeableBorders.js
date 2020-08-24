import { applyThemeableColor } from './applyThemeableColor'

const borderMap = {
  all: [`border`],
  horizontal: [`borderLeft`, `borderRight`],
  vertical: [`borderTop`, `borderBottom`],
  left: [`borderLeft`],
  right: [`borderRight`],
  top: [`borderTop`],
  bottom: [`borderBottom`],
}

export function applyThemeableBorders(borders, context) {
  let normalizedBordersShape = []
  let inlineStyles = {}

  if (!Array.isArray(borders)) {
    normalizedBordersShape.push(borders)
  } else if (Array.isArray(borders)) {
    normalizedBordersShape = [...borders]
  }

  normalizedBordersShape.forEach(entry => {
    const {
      radius,
      sides = [`all`],
      size = `1px`,
      style = `solid`,
      color = `currentColor`,
    } = entry

    sides.forEach(side => {
      borderMap[side].forEach(cssBorderProperty => {
        inlineStyles[cssBorderProperty] = `${size} ${style} ${applyThemeableColor(color, context)}`
        inlineStyles.borderRadius = radius // technically not correct as this applies it to all sides
      })
    })
  })

  return inlineStyles
}
