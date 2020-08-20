export function applyThemeableBoxShadow(boxShadow, context) {
  const {
    mode,
  } = context

  return typeof boxShadow === `object`
    ? boxShadow[mode]
    : boxShadow
}
