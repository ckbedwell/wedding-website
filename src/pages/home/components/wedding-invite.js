import { useSelector } from 'react-redux'

import { capitalize } from 'utils/capitalize'
import { getNames } from 'utils/getNames'
import { Box } from 'components/box'
import { DecorativeBox } from 'components/decorative-box'
import { Link } from 'components/link'
import { Text } from 'components/text'
import { WeddingDate } from 'components/wedding-date'

import itinerary from 'data/itinerary.json'

export const WeddingInvite = () => {
  const { guestData } = useSelector(state => state.database)

  return (
    <DecorativeBox>
      <Box marginBottom={3}>
        <Text
          family={`secondary`}
          size={12}
        >
          {`Dear ${getNames(guestData)},`}
        </Text>
      </Box>
      <Box marginBottom={6}>
        <Text
          family={`primary`}
          size={4}
        >
          {`Paul and Amanda Buttery request the pleasure of your company to celebrate the marriage of their daughter Emily Kate to Mr Christopher Bedwell`}
        </Text>
      </Box>
      <Box marginBottom={4}>
        <WeddingDate />
      </Box>
      <Box marginBottom={6}>
        {itinerary.map(event => {
          return (
            <Box
              key={event.id}
              marginBottom={3}
            >
              <Text>
                <Link
                  title={`See details`}
                  to={event.link}
                >
                  {`${capitalize(event.id)} at ${event.start}`}
                </Link>
              </Text>
            </Box>
          )
        })}
      </Box>
      <Box>
        <Text>
          {`Please RSVP by some date`}
          <div>
            <Link
              bodyLink
              to={`/rsvp`}
            >
              {`RSVP now`}
            </Link>
          </div>
        </Text>
      </Box>
    </DecorativeBox>
  )
}