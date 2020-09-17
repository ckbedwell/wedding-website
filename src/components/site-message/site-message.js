import { useDispatch } from 'react-redux'

import { clearError } from 'store/database-slice'
import { Box } from 'components/box'
import { Container } from 'components/container'
import { Text } from 'components/text'
import { Svg } from 'components/svg'

import styles from './site-message.css'

export const SiteMessage = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <Box
      backgroundColor={`black`}
      borders={{
        sides: [`top`],
      }}
      className={styles.siteMessage}
      padding={4}
    >
      <Container
        container={`xl`}
        padded
      >
        <Box
          padding={{
            horizontal: 8,
          }}
          relative
        >
          <Text textAlign={`center`}>
            {children}
          </Text>
          <button
            className={styles.clearError}
            onClick={() => dispatch(clearError())}
          >
            <Svg
              block
              icon={`cross`}
            />
          </button>
        </Box>
      </Container>
    </Box>
  )
}
