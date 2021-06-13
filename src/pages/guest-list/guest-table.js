import { Box } from 'components/box'
import { Grid } from 'components/grid'
import { Text } from 'components/text'
import { InviteEntry } from './invite-entry'

import styles from './guest-list.css'

const inviteKeys = [
  `Invite sent?`,
  `Invite`,
  `Email`,
  `Message`,
  `Song`,
  `Name`,
  `Can come?`,
  `Food`,
  `Allergies`,
]

export const GuestTable = ({
  data,
  generateEntry,
  inviteType,
}) => {
  return (
    <Text className={styles.table}>
      <Box className={styles.header}>
        <Grid columns={inviteKeys.length}>
          {inviteKeys.map(key => (
            <Box
              key={key}
              padding={4}
            >
              <Text lineHeight={1}>
                {key}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box className={styles.entries}>
        {data.map(entry => {
          return (
            <InviteEntry
              generateEntry={generateEntry}
              invite={entry}
              inviteKeys={inviteKeys}
              inviteType={inviteType}
              key={entry.id}
            />
          )
        })}
      </Box>
    </Text>
  )
}
