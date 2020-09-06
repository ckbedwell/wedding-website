import React from 'react'
import { useSelector } from 'react-redux'

import { dotProps } from 'utils/dot-props'
import { Box } from 'components/box'
import { Section } from 'components/section'
import { Desktop, TabletMobile } from 'components/responsive'
import { Grid } from 'components/grid'
import { GuestForm } from './components/guest-form'
import { SubmitButton } from './components/submit-button'
import { DirectContact } from './components/direct-contact'

const ADD_DATA = `ADD_DATA`
const UPDATE_VALUE = `UPDATE_VALUE`
const DOCID_DOES_NOT_EXIST = `DOCID_DOES_NOT_EXIST`
const COULD_NOT_UPDATE = `COULD_NOT_UPDATE`

export const RSVP = () => {
  const database = useSelector(state => state.database.database)
  const guestData = useSelector(state => state.database.guestData)
  const docId = useSelector(state => state.database.docId)
  const loading = useSelector(state => state.database.loading)

  const [rsvpState, rsvpDispatch] = React.useReducer(rsvpReducer, {})
  const [submitted, setSubmitted] = React.useState(false)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    rsvpDispatch({
      type: ADD_DATA,
      payload: guestData,
    })
  }, [guestData])

  return (
    <>
      <Desktop>
        <Section
          style={{
            backgroundColor: `rgb(255 247 247)`,
          }}
        >
          <pre>
            {JSON.stringify(rsvpState, null, 2)}
          </pre>
          {renderContent(rsvpState?.invited?.length)}
        </Section>
      </Desktop>
      <TabletMobile>
        <Section
          style={{
            backgroundColor: `rgb(255 247 247)`,
          }}
        >
          {renderContent(1)}
        </Section>
      </TabletMobile>
    </>
  )

  function renderContent(columns) {
    if (rsvpState?.invited) {
      return (
        <>
          <Grid
            columns={columns}
            gap={5}
          >
            {rsvpState.invited.map((invitedGuest, idx) => {
              return (
                <div key={invitedGuest.name}>
                  <GuestForm
                    guestData={invitedGuest}
                    idx={idx}
                  
                    onChange={handleChange}
                    single={rsvpState.invited.length === 1}
                  />
                </div>
              )
            })}
          </Grid>
          <Box
            center
            direction={`vertical`}
            margin={{ top: 10 }}
          >
            {submitted ? `Submitted` : `Not submitted`}
            <SubmitButton
              disabled={submitted === `Submitted`}
              onClick={() => handleSubmit()}
            />
          </Box>
        </>
      )
    }

    if (!docId && !loading) {
      return (
        <DirectContact />
      )
    }

    return null
  }

  function handleChange({ idx, fieldName, content }) {
    rsvpDispatch({
      type: UPDATE_VALUE,
      payload: {
        name: `invited[${idx}].${fieldName}`,
        content,
      },
    })
  }

  function handleSubmit() {
    database.update(`guests`, docId, {
      ...rsvpState,
      submitted: false,
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(COULD_NOT_UPDATE))
  }
}

function rsvpReducer(state, action) {
  switch (action.type) {
  case ADD_DATA:
    return action.payload
  case UPDATE_VALUE:
    return dotProps.set(state, action.payload.name, action.payload.content)
  default:
    return state
  }
}
