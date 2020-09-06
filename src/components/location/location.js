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
      <Button
        target={`_blank`}
        to={`https://www.google.com/maps/dir//${location.join(',')}`}
      >
        {`Get directions`}
      </Button>
    </>
  )
}
