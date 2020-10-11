import React from 'react'
import { useSelector } from 'react-redux'

import { GUEST_COLLECTION } from 'store/database-slice'
import { useModal } from 'utils/useModal'
import { Grid } from 'components/grid'
import { Box } from 'components/box'
import { Cell } from './cell'
import { Invite } from 'pages/invite'
import { Text } from 'components/text'

export const GuestRow = ({
  i,
  invite,
  inviteKeys,
}) => {
  const {
    id,
    email,
    personalisedMessage,
    sent,
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
          <Cell>
            <SentCellContent invite={invite} />
          </Cell>
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
      <Cell data-id={sent} />
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

const SentCellContent = ({ invite }) => {
  const database = useSelector(state => state.database.database)
  const [sent, setSent] = React.useState(invite.sent)

  if (sent) {
    return (
      <button
        onClick={() => {
          database.update(GUEST_COLLECTION, invite.id, {
            ...invite,
            sent: false,
          }).then(() => {
            setSent(false)
          })
        }}
      >
        <Box
          backgroundColor={`green`}
          padding={2}
        >
          <Text color={`white`}>
            {`Sent`}
          </Text>
        </Box>
      </button>
    )
  }

  return (
    <button
      onClick={() => {
        database.update(GUEST_COLLECTION, invite.id, {
          ...invite,
          sent: true,
        }).then(() => {
          setSent(true)
        })
      }}
    >
      <Box
        backgroundColor={`yellow`}
        padding={2}
      >
        {`Send`}
      </Box>
    </button>
  )
}