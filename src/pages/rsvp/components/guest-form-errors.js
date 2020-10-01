export const GuestFormErrors = ({ rsvpState, invalidOptions }) => {
  if (invalidOptions.length) {
    return (
      <>
        {invalidOptions.map((canCome, i) => {
          const { name } = rsvpState.invited[i]

          if (!canCome) {
            return (
              <div key={name}>
                {`Please tell us whether ${name} can come or not.`}
              </div>
            )
          }

          return null
        })}
      </>
    )
  }

  return null
}
