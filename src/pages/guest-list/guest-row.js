import { useModal } from 'utils/useModal'
import { Grid } from 'components/grid'
import { Cell } from './cell'
import { Invite } from 'pages/invite'

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

  const [modal, setOpen] = useModal(
    <Invite guestData={invite} />
  )

  if (i === 0) {
    return (
      <>
        <Grid
          columns={inviteKeys.length}
        >
          <Cell title={id}>
            <button onClick={() => setOpen(true)}>
              {id}
            </button>
          </Cell>
          <Cell title={email}>
            {email}
          </Cell>
          <Cell title={personalisedMessage}>
            {personalisedMessage}
          </Cell>
          <Cell title={songChoice}>
            {songChoice}
          </Cell>
          <GuestData guest={invited[i]} />
        </Grid>
        {modal}
      </>
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