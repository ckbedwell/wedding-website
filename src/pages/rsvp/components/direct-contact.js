import { Box } from 'components/box'
import { Container } from 'components/container'
import { DecorativeBox } from 'components/decorative-box'
import { Link } from 'components/link'
import { Text } from 'components/text'

import styles from './direct-contact.css'

const email = `ckbedwell@gmail.com`

export const DirectContact = () => {
  return (
    <>
      <Box
        center
        marginBottom={5}
      >
        <DecorativeBox>
          <Box
            className={styles.directContact}
            direction={`vertical`}
            padding={{
              vertical: 30,
            }}
          >
            <Text>
              {`You can rsvp by emailing Chris at `}
              <Link
                bodyLink
                target={`_blank`}
                to={`mailto:${email}`}
              >
                {email}
              </Link>
              {` or if you use the link that was provided to you, there will be a form on this page to fill out.`}
            </Text>
          </Box>
        </DecorativeBox>
      </Box>
      <Container container={`xs`}>
        <Box
          center
          className={styles.directContact}
        >
          <Text
            style={{ fontStyle: `italic` }}
            textAlign={`center`}
          >
            {`If you did follow that link and are seeing this message, let me know and I'll fix it!`}
          </Text>
        </Box>
      </Container>
    </>
  )
}
