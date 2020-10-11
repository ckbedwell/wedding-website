import React from 'react'
import html2canvas from 'html2canvas'
import classNames from 'classnames'

import { getNames } from 'utils/getNames'
import { Box } from 'components/box'
import { Button } from 'components/button'
import { Container } from 'components/container'
import { DecorativeBox } from 'components/decorative-box'
import { Text } from 'components/text'
import { WeddingDate } from 'components/wedding-date'

import styles from './invite.css'
import itinerary from 'data/itinerary.json'

// https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3fdoc_sig%3dsh4298922_KTM%253adh4298922_KTM%253ai15%255e1%253at1%26language_id%3d2%26forcepopulatesampletext%3dtrue&width=1000&category=lp-redirect&merchant_metadata=KTM

const DOMAIN = `https://wedding.ckbedwell.com`

export const Invite = ({ guestData }) => {
  const [showOriginal, setShowOriginal] = React.useState(true)
  const ceremony = itinerary.find(event => event.id === `ceremony`)
  const reception = itinerary.find(event => event.id === `reception`)
  const inviteRef = React.useRef()
  const holderRef = React.useRef()
  const names = getNames(guestData)

  React.useLayoutEffect(() => {
    html2canvas(inviteRef.current).then(canvas => {
      setShowOriginal(false)
      holderRef.current.appendChild(canvas)
    })
  }, [inviteRef.current])

  return (
    <Box
      className={classNames({
        [styles.hide]: showOriginal,
      })}
      margin={20}
    >
      <Container container={`small`}>
        <div ref={holderRef} />
        {renderContent()}
      </Container>
    </Box>
  )

  function renderContent() {
    if (showOriginal) {
      return (
        <div
          className={styles.border}
          ref={inviteRef}
        >
          <DecorativeBox
            backgroundColor={`white`}
            style={{
              height: 1000,
            }}
          >
            <Box
              center
              direction={`vertical`}
            >
              <Box
                marginBottom={8}
                style={{
                  width: 350,
                }}
              >
                <Box
                  marginBottom={8}
                >
                  <Text size={5}>
                    {`${names},`}
                  </Text>
                </Box>
                <Text
                  family={`primary`}
                  size={5}
                >
                  {`The honour of your presence is requested at the marriage of`}
                </Text>
              </Box>
              <Box marginBottom={8}>
                <Text
                  family={`secondary`}
                  size={12}
                >
                  {`Emily Kate Buttery`}
                </Text>
                <Box
                  alignItems={`center`}
                  direction={`horizontal`}
                  gap={3}
                  margin={{
                    vertical: 4,
                  }}
                >
                  <Box
                    backgroundColor={`lightgrey`}
                    className={styles.divider}
                  />
                  <Text
                    family={`secondary`}
                    lineHeight={1}
                    size={12}
                  >
                    {`&`}
                  </Text>
                  <Box
                    backgroundColor={`lightgrey`}
                    className={styles.divider}
                  />
                </Box>
                <Text
                  family={`secondary`}
                  size={12}
                >
                  {`Christopher Bedwell`}
                </Text>
              </Box>
              <Box
                marginBottom={8}
              >
                <WeddingDate
                  family={`primary`}
                  size={5}
                />
              </Box>
              <Box marginBottom={4}>
                <Box marginBottom={2}>
                  <Text
                    fontWeight={700}
                    size={5}
                  >
                    {`Venue`}
                  </Text>
                </Box>
                <Text>
                  {ceremony.location[0]}
                </Text>
                <Text>
                  {ceremony.location[2]}
                </Text>
              </Box>
              <Text style={{ width: 250 }}>
                {`Reception to follow at ${reception.location[0]}`}
              </Text>
              <Box
                center
                className={styles.rsvp}
              >
                <Text
                  style={{
                    fontStyle: `italic`,
                    width: 200,
                  }}
                >
                  {`Please RSVP by following the link below`}
                </Text>
              </Box>
            </Box>
          </DecorativeBox>
        </div>
      )
    }

    return (
      <Box
        direction={`horizontal`}
        gap={4}
      >
        <Button
          onClick={() => {
            document.querySelector(`canvas`)
              .toBlob(blob => navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blob })]))
          }}
        >
          {`Copy`}
        </Button>
        <Button
          target={`_blank`}
          to={`mailto:${guestData.email}?subject=Chris and Emily are getting married!&body=${DOMAIN}?id=${btoa(guestData.id)}%0D%0A%0D%0AThis link is unique to you, so you easily RSVP on our website, if you share it with anybody else they will be to rsvp on your behalf!`}
        >
          {`Send invite`}
        </Button>
      </Box>
    )
  }
}
