export function capitalize(word) {
  const firstChar = word.charAt(0).toUpperCase()
  const rest = word.slice(1)

  return `${firstChar}${rest}`
}