import React from 'react'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { dotProps } from 'utils/dot-props'
import { Box } from 'components/box'
import { Text } from 'components/text'
import { Section } from 'components/section'
import { Desktop, TabletMobile } from 'components/responsive'
import { Grid } from 'components/grid'
import { canComeOptions, GuestForm } from './components/guest-form'
import { SubmitButton } from './components/submit-button'
import { DirectContact } from './components/direct-contact'
import { GuestFormErrors } from './components/guest-form-errors'
import { getGuest, GUEST_COLLECTION } from 'store/database-slice'

import styles from './rsvp.css'

const ADD_DATA = `ADD_DATA`
const UPDATE_VALUE = `UPDATE_VALUE`
const COULD_NOT_UPDATE = `COULD_NOT_UPDATE`

export const RSVP = () => {
  const dispatch = useDispatch()
  const database = useSelector(state => state.database.database)
  const guestData = useSelector(state => state.database.guestData)
  const docId = useSelector(state => state.database.docId)
  const loading = useSelector(state => state.database.loading)

  const [rsvpState, rsvpDispatch] = React.useReducer(rsvpReducer, {})
  const [disabled, setDisabled] = React.useState(false)
  const [submitted, setSubmitted] = React.useState()
  const [error, setError] = React.useState(false)
  const [invalidOptions, setInvalidOptions] = React.useState([])

  React.useEffect(() => {
    rsvpDispatch({
      type: ADD_DATA,
      payload: guestData,
    })

    setDisabled(guestData?.submitted)
  }, [guestData])

  return (
    <>
      <Desktop>
        <Section
          style={{
            backgroundColor: `rgb(255 247 247)`,
          }}
        >
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
          {renderSubmittedMessage()}
          <div
            className={classNames({
              [styles.disabled]: disabled,
            })}
          >
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
              gap={4}
              margin={{ top: 10 }}
            >
              <GuestFormErrors
                invalidOptions={invalidOptions}
                rsvpState={rsvpState}
              />
              <SubmitButton
                disabled={disabled}
                onClick={handleSubmit}
              />
              {renderResult()}
            </Box>
          </div>
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

  function renderSubmittedMessage() {
    if (guestData?.submittedDates?.length) {
      return (
        <Box marginBottom={8}>
          <Text textAlign={`center`}>
            {`You submitted this RSVP with the following details on the ${getLastSubmittedDate()}. `}
            {`To update them, `}
            <button
              className={styles.resubmit}
              onClick={() => setDisabled(false)}
            >
              {`click here.`}
            </button>
          </Text>
        </Box>
      )
    }

    return null
  }

  function getLastSubmittedDate() {
    const length = guestData.submittedDates.length
    const lastDate = guestData.submittedDates[length - 1]

    return new Date(lastDate).toLocaleDateString()
  }

  function renderResult() {
    if (error) {
      const errorMap = {
        [COULD_NOT_UPDATE]: `Could not submit your form. Try again or contact Chris directly at ckbewell@gmail.com`,
      }

      return (
        <Box>
          {errorMap[error]}
        </Box>
      )
    }

    if (submitted) {
      return (
        <Box>
          {`Thank you for RSVPing!`}
        </Box>
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
    if (checkCanComeOption()) {
      setDisabled(true)

      database.update(GUEST_COLLECTION, docId, {
        ...rsvpState,
        submitted: true,
        submittedDates: [...(guestData.submittedDates || []), new Date().getTime()],
      })
        .then(() => {
          setSubmitted(true)
          dispatch(getGuest(btoa(docId)))
        })
        .catch((e) => {
          console.error(e)
          setError(COULD_NOT_UPDATE)
          setDisabled(false)
        })
    }
  }

  function checkCanComeOption() {
    const validOptions = canComeOptions.map(({ value }) => value).filter(Boolean)

    const validation = rsvpState.invited.map(guest => {
      return validOptions.includes(guest.canCome)
    })

    setInvalidOptions(validation)

    if (validation.every(Boolean)) {
      return true
    }

    return false
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
