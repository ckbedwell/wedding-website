export function getIcons() {
  const icons = require.context('../icons', true, /\.svg$/)
  icons.keys().forEach(icons)
}
