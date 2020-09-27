import { Grid } from 'components/grid'
import { Cell } from './cell'

export const GuestRow = ({
  i,
  invite,
  inviteKeys,
}) => {
  const {
    id,
    email,
    personalisedMessage,
    songChoice,
    invited,
  } = invite

  if (i === 0) {
    return (
      <Grid
        columns={inviteKeys.length}
      >
        <Cell>
          {id}
        </Cell>
        <Cell>
          {email}
        </Cell>
        <Cell>
          {personalisedMessage}
        </Cell>
        <Cell>
          {songChoice}
        </Cell>
        <GuestData guest={invited[i]} />
      </Grid>
    )
  }

  return (
    <Grid columns={inviteKeys.length}>
      <Cell data-id={id} />
      <Cell data-id={email} />
      <Cell data-id={personalisedMessage} />
      <Cell data-id={songChoice} />
      <GuestData guest={invited[i]} />
    </Grid>
  )
}

const GuestData = ({ guest }) => {
  const { name, canCome, foodRequirements, allergies } = guest

  return (
    <>
      <Cell>
        {name}
      </Cell>
      <Cell>
        {canCome}
      </Cell>
      <Cell>
        {foodRequirements}
      </Cell>
      <Cell>
        {allergies}
      </Cell>
    </>
  )
}