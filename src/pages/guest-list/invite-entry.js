import { Box } from 'components/box'
import { Grid } from 'components/grid'
import { GuestRow } from './guest-row'
import { Cell } from './cell'

export const InviteEntry = ({ invite, inviteKeys, generateEntry }) => {
  const {
    id,
    email,
    noDatabaseEntry,
    invited,
  } = invite

  return (
    <Box>
      {renderContent()}
    </Box>
  )

  function renderContent() {
    if (noDatabaseEntry) {
      return (
        <Grid columns={`1fr 1fr ${inviteKeys.length - 2}fr`}>
          <Cell>
            {id}
          </Cell>
          <Cell>
            {email}
          </Cell>
          <Cell>
            {`Would you like to generate a database entry?`}
            <button onClick={() => generateEntry(invite)}>
              {`Generate entry`}
            </button>
          </Cell>
        </Grid>
      )
    }

    return (
      <Box>
        {invited.map((guest, i) => (
          <GuestRow
            i={i}
            invite={invite}
            inviteKeys={inviteKeys}
            key={guest.name}
          />
        ))}
      </Box>
    )
  }
}