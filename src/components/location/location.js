import { Box } from 'components/box'
import { Button } from 'components/button'
import { Text } from 'components/text'

export const Location = ({ location }) => {
  return (
    <>
      <Box marginBottom={4}>
        {location.map(line => (
          <Text key={line}>
            {line}
          </Text>
        ))}
      </Box>
      <Button>
        Get directions
      </Button>
    </>
  )
}
