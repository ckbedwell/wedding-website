import React from 'react'
import { useSelector } from 'react-redux'

import { GUEST_COLLECTION } from 'store/database-slice'
import { guest, invite } from 'models/guest'
import { capitalize } from 'utils/capitalize'
import { Box } from 'components/box'
import { Container } from 'components/container'
import { Grid } from 'components/grid'
import { Text } from 'components/text'

import guestList from 'data/guests.json'

const gap = 3
const inviteKeys = [
  `Invite`,
  `Email`,
  `Message`,
  `Song`,
  `Name`,
  `Can come?`,
  `Food requirements`,
  `Allergies`,
]

export const GuestList = () => {
  const database = useSelector(state => state.database.database)
  const [databaseInvites, setDatabaseInvites] = React.useState()

  React.useEffect(() => {
    if (database) {
      fetchData()
    }
  }, [database])

  if (databaseInvites) {
    return (
      <Container container={`xl`}>
        <Text>
          <Box
            backgroundColor={`lightgrey`}
            padding={{
              vertical: 3,
            }}
          >
            <Text
              lineHeight={1}
              textAlign={`center`}
            >
              <Grid
                columns={inviteKeys.length}
                gap={gap}
              >
                {inviteKeys.map(key => (
                  <div key={key}>
                    {key}
                  </div>
                ))}
              </Grid>
            </Text>
          </Box>
          {formattedData().map(entry => {
            return (
              <Invite
                generateEntry={generateEntry}
                invite={entry}
                key={entry.id}
              />
            )
          })}
        </Text>
      </Container>
    )
  }

  return null

  function fetchData() {
    database.getCollection(GUEST_COLLECTION)
      .then(data => {
        setDatabaseInvites(data)
      })
  }

  function formattedData() {
    return Object.entries(guestList).map(([id, email]) => {
      if (databaseInvites[id]) {
        return {
          email,
          ...databaseInvites[id],
        }
      }

      return {
        id,
        email,
        noDatabaseEntry: true,
      }
    })
  }

  function generateEntry(entry) {
    const data = newEntry(entry)
    database.set(GUEST_COLLECTION, entry.id, data).then(() => {
      fetchData()
    })
  }
}

const Invite = props => {
  const { id, email, noDatabaseEntry } = props.invite

  return (
    <Box
      backgroundColor={`rgb(249 249 249)`}
      padding={{ vertical: 2 }}
    >
      {renderContent()}
    </Box>
  )

  function renderContent() {
    if (noDatabaseEntry) {
      return (
        <Grid columns={`1fr 1fr ${inviteKeys.length - 2}fr`}>
          <div>
            {id}
          </div>
          <div>
            {email}
          </div>
          <div>
            {`Would you like to generate a database entry?`}
            <button onClick={() => props.generateEntry(props.invite)}>
              {`Generate entry`}
            </button>
          </div>
        </Grid>
      )
    }
  }
}

const Row = () => {
  return (
    <Grid>
      {}
    </Grid>
  )
}

function newEntry(entry) {
  const names = entry.id.split(`-and-`)

  return {
    ...invite,
    invited: names.map(name => ({
      ...guest,
      name,
    })),
  }
}
