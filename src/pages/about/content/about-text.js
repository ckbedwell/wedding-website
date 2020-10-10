import { Box } from 'components/box'
import { Text } from 'components/text'

export const AboutText = () => {
  return (
    <div>
      <Text
        family={`secondary`}
        size={14}
        tag={`h1`}
      >
        {`Emily and Chris`}
      </Text>
      <Box marginBottom={4}>
        <Text>
          {``}
        </Text>
      </Box>
    </div>
  )
}
