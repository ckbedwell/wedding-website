export function getNames(guestData) {
  if (guestData) {
    if (guestData.invited.length === 1) {
      return guestData.invited[0].name
    }

    const names = guestData.invited.map(({ name }) => name)
    const lastPerson = names[names.length - 1]

    return (
      `${names.slice(0, names.length - 1).join(', ')} and ${lastPerson}`
    )
  }
}