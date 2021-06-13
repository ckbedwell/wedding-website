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

import styles from './evening-invite.css'
import itinerary from 'data/itinerary.json'

// https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3fdoc_sig%3dsh4298922_KTM%253adh4298922_KTM%253ai15%255e1%253at1%26language_id%3d2%26forcepopulatesampletext%3dtrue&width=1000&category=lp-redirect&merchant_metadata=KTM

const DOMAIN = `https://wedding.ckbedwell.com`

export const EveningInvite = ({ guestData }) => {
  const [showOriginal, setShowOriginal] = React.useState(true)
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
                  width: 450,
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
                  {`Please join us for an evening reception to celebrate the marriage of`}
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
                marginBottom={2}
              >
                <WeddingDate
                  family={`primary`}
                  size={5}
                />
              </Box>
              <Box
                marginBottom={8}
              >
                <Text
                  fontWeight={500}
                  size={5}
                >
                  {`7.30pm`}
                </Text>
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
                  {reception.location[0]}
                </Text>
                <Text>
                  {reception.location[2]}
                </Text>
                <Text>
                  {reception.location[3]}
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
          to={`mailto:${guestData.email}?subject=Chris and Emily are getting married!&body=${DOMAIN}?`}
        >
          {`Send invite`}
        </Button>
      </Box>
    )
  }
}
