import { Box } from 'components/box'
import { Button } from 'components/button'
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
        <Grid columns={`1fr 1fr 1fr ${inviteKeys.length - 3}fr`}>
          <Cell>
            {`false`}
          </Cell>
          <Cell title={id}>
            {id}
          </Cell>
          <Cell title={email}>
            {email}
          </Cell>
          <Cell>
            <Box
              alignItems={`center`}
              direction={`horizontal`}
              justifyContent={`space-between`}
            >
              {`Would you like to generate a database entry?`}
              <Button onClick={() => generateEntry(invite)}>
                {`Generate entry`}
              </Button>
            </Box>
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