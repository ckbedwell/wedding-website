import { Box } from 'components/box'
import { Text } from 'components/text'

import covid from 'data/covid-19.json'

import styles from './covid-notice.css'

export const CovidNotice = () => {
  if (covid?.data?.length) {
    return (
      <Text textAlign={`center`}>
        <Box
          backgroundColor={`rgb(255 255 235)`}
          borders={{
            color: `rgb(212 212 134)`,
            radius: `5px`,
          }}
          className={styles.notice}
          direction={`vertical`}
          gap={4}
          padding={8}
        >
          {covid.data.map(para => {
            return (
              <div
                className={styles.para}
                key={para}
              >
                {para}
              </div>
            )
          })}
        </Box>
      </Text>
    )
  }

  return null
}
