import React from 'react'

import { dotProps } from 'utils/dot-props'
import { useDatabase } from 'database/useDatabase'
import { Container } from 'components/container'
import { GuestForm } from './components/guest-form'

const UPDATE_VALUE = `UPDATE_VALUE`

export const RSVP = () => {
  const database = useDatabase()
  const [rsvpState, rsvpDispatch] = React.useReducer(rsvpReducer, {})
  const docId = `chris-and-emily`

  React.useEffect(() => {
    if (database) {
      database.get(`guests`, docId)
        .then(data => {
          rsvpDispatch({
            type: UPDATE_VALUE,
            payload: {
              name: docId,
              content: data,
            },
          })
        })
    }
  }, [Boolean(database)])

  return (
    <div>
      <Container container={`large`}>
        <pre>
          {JSON.stringify(rsvpState, null, 2)}
        </pre>
        {renderContent()}
      </Container>
    </div>
  )

  function renderContent() {
    if (rsvpState[docId]?.invited) {
      return rsvpState[docId].invited.map((invitedGuest, idx) => {
        return (
          <GuestForm
            guestData={invitedGuest}
            idx={idx}
            key={invitedGuest.name}
            onChange={handleChange}
            single={rsvpState[docId].invited.length === 1}
          />
        )
      })
    }

    return null
  }

  function handleChange({ idx, fieldName, content }) {
    rsvpDispatch({
      type: UPDATE_VALUE,
      payload: {
        name: `${docId}.invited[${idx}].${fieldName}`,
        content,
      },
    })
  }
}

function rsvpReducer(state, action) {
  switch (action.type) {
  case UPDATE_VALUE:
    return dotProps.set(state, action.payload.name, action.payload.content)
  default:
    return state
  }
}