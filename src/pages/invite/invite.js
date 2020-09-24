import { Box } from 'components/box'
import { Container } from 'components/container'
import { DecorativeBox } from 'components/decorative-box'
import { Text } from 'components/text'
import { WeddingDate } from 'components/wedding-date'

import styles from './invite.css'
import itinerary from 'data/itinerary.json'

// https://rendering.mcp.cimpress.com/v1/vp/preview?instructions_uri=http%3a%2f%2fservices.vistaprint.com%2fsales%2fdocuments%2fpreviewing%2foriondocsignature.aspx%3fdoc_sig%3dsh4298922_KTM%253adh4298922_KTM%253ai15%255e1%253at1%26language_id%3d2%26forcepopulatesampletext%3dtrue&width=1000&category=lp-redirect&merchant_metadata=KTM

export const Invite = () => {
  const ceremony = itinerary.find(event => event.id === `ceremony`)
  const reception = itinerary.find(event => event.id === `reception`)

  return (
    <Box margin={20}>
      <Container container={`small`}>
        <div className={styles.border}>
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
      </Container>
    </Box>
  )
}
