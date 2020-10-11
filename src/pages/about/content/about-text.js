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
      <Box
        marginBottom={4}
        style={{
          maxWidth: `500px`,
        }}
      >
        <Text>
          <p>
            {`Southern boy meets midlands girl on the internet in London.`}
          </p>
          <p>
            {`Three years and many adventures later, we are getting married and we would love for you to celebrate with us.`}
          </p>
        </Text>
      </Box>
    </div>
  )
}
