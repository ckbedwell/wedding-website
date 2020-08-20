import { Box } from 'components/box'
import { Link } from 'components/link'
import { Location } from 'components/location'
import { Text } from 'components/text'

import itinerary from 'data/itinerary.json'

export const ChurchText = () => {
  const data = itinerary.find(item => item.id === `ceremony`)

  return (
    <div>
      <Text
        family={`secondary`}
        size={10}
        tag={`h1`}
      >
        {`St Andrews Church`}
      </Text>
      <Box marginBottom={4}>
        <Text>
          {`We'll be getting married at St Andrews Church in Newcastle-under-Lyme. The ceremony starts at ${data.start}. There is plenty of parking at the church and it is 25 minutes away from the `}
          <Link
            bodyLink
            to={`/reception`}
          >
            {`wedding reception`}
          </Link>
          {`.`}
        </Text>
      </Box>
      <Location location={data.location} />
    </div>
  )
}
