export function applySizing({
  size,
  rule,
  config,
}) {
  const { factor, unit } = config.spacing
  let inlineStyles = {} // CSSProperties

  if (typeof size === `number`) {
    inlineStyles[rule] = `${size * factor}${unit}`
  }

  if (typeof size === `object`) {
    Object.entries(size).forEach(([key, value]) => {
      if (key === `vertical` && value) {
        inlineStyles[`${rule}Top`] = getValue(value, factor, unit)
        inlineStyles[`${rule}Bottom`] = getValue(value, factor, unit)
      } else if (
        key === `horizontal` && value
      ) {
        inlineStyles[`${rule}Left`] = getValue(value, factor, unit)
        inlineStyles[`${rule}Right`] = getValue(value, factor, unit)
      } else if (key && value) {
        const directionRule = `${rule}${capitalize(key)}`
        inlineStyles[directionRule] = getValue(value, factor, unit)
      }
    })
  }

  return inlineStyles
}

function getValue(value, factor, unit) {
  return `${value * factor}${unit}`
}

function capitalize(word) {
  const firstChar = word.charAt(0).toUpperCase()
  const rest = word.slice(1)

  return `${firstChar}${rest}`
}
