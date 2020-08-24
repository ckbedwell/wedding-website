import { Box } from 'components/box'
import { Link } from 'components/link'
import { Location } from 'components/location'
import { Text } from 'components/text'

import itinerary from 'data/itinerary.json'

export const ReceptionText = () => {
  const data = itinerary.find(item => item.id === `reception`)

  return (
    <div>
      <Text
        family={`secondary`}
        size={15}
        tag={`h1`}
      >
        {`Alcumlow Wedding Barn`}
      </Text>
      <Box marginBottom={4}>
        <Text>
          {`The reception is being held at the beautiful Alcumlow Wedding Barn. The reception starts at ${data.start}, where we will be having welcome drinks and canapés upon arrival.`}
        </Text>
      </Box>
      <Box marginBottom={4}>
        <Text>
          {`It is very close to the village of Congleton, where we have put together a list of `}
          <Link
            bodyLink
            to={`/accommodation`}
          >
            {`accommodation options`}
          </Link>
          {`. `}
          {`There is plenty of parking on-site for those that are driving to the venue.`}
        </Text>
      </Box>
      <Location location={data.location} />
    </div>
  )
}
