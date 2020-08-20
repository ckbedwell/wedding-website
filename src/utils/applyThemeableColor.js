export function applyThemeableColor(color, context) {
  const {
    config,
    mode,
  } = context

  const usableColor = typeof color === `string`
    ? color
    : color[mode]

  if (config.colors && config.colors[usableColor]) {
    return config.colors[usableColor]
  }

  return usableColor
}
