import React from 'react'
import { useSelector } from 'react-redux'

import { GUEST_COLLECTION } from 'store/database-slice'
import { capitalize } from 'utils/capitalize'
import * as models from 'models/guest'
import { Box } from 'components/box'
import { Container } from 'components/container'
import { GuestTable } from './guest-table'

import emilyGuestList from 'data/emily-guests.json'
import chrisGuestList from 'data/chris-guests.json'

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
        <Box
          direction={`vertical`}
          gap={8}
        >
          <GuestTable
            data={formattedData(emilyGuestList)}
            generateEntry={generateEntry}
          />
          <GuestTable
            data={formattedData(chrisGuestList)}
            generateEntry={generateEntry}
          />
        </Box>
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

  function formattedData(data) {
    return Object.entries(data).map(([id, email]) => {
      if (databaseInvites[id]) {
        return {
          id,
          email,
          sent: false,
          ...databaseInvites[id],
        }
      }

      return {
        sent: false,
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
      sent: false,
      name: capitalize(name.replace(`-`, ` `)),
    })),
  }
}
