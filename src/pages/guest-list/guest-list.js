import React from 'react'
import { useSelector } from 'react-redux'

import { GUEST_COLLECTION } from 'store/database-slice'
import { capitalize } from 'utils/capitalize'
import * as models from 'models/guest'
import { Box } from 'components/box'
import { Container } from 'components/container'
import { Grid } from 'components/grid'
import { Text } from 'components/text'
import { InviteEntry } from './invite-entry'

import guestList from 'data/guests.json'

import styles from './guest-list.css'

const inviteKeys = [
  `Invite`,
  `Email`,
  `Message`,
  `Song`,
  `Name`,
  `Can come?`,
  `Food`,
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
        <Text className={styles.table}>
          <Box className={styles.header}>
            <Grid columns={inviteKeys.length}>
              {inviteKeys.map(key => (
                <Box
                  key={key}
                  padding={4}
                >
                  <Text lineHeight={1}>
                    {key}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box className={styles.entries}>
            {formattedData().map(entry => {
              return (
                <InviteEntry
                  generateEntry={generateEntry}
                  invite={entry}
                  inviteKeys={inviteKeys}
                  key={entry.id}
                />
              )
            })}
          </Box>
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
          id,
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

function newEntry(entry) {
  const names = entry.id.split(`-and-`)

  return {
    ...models.invite,
    invited: names.map(name => ({
      ...models.guest,
      name: capitalize(name.replace(`-`, ` `)),
    })),
  }
}
