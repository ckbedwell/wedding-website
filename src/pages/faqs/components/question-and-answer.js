import { Box } from 'components/box'
import { Text } from 'components/text'
import itinerary from 'data/itinerary.json' 

export const QuestionAndAnswer = ({ answer, question }) => {
  const ceremony = itinerary.find(item => item.id === `ceremony`)
  const reception = itinerary.find(item => item.id === `reception`)

  return (
    <div>
      <Text
        family={`secondary`}
        size={10}
        tag={`h2`}
      >
        {question}
      </Text>
      {answer.map((paragraph, i) => {
        return (
          <Box
            key={i}
            marginBottom={3}
          >
            <Text >
              <div
                dangerouslySetInnerHTML={{
                  __html:interpolation({ paragraph, ceremony, reception }),
                }}
              />
            </Text>
          </Box>
        )
      })}
    </div>
  )
}

function interpolation({ paragraph, ceremony, reception }) {
  return (
    paragraph
      .replace(`{{ceremonyStart}}`, ceremony.start)
      .replace(`{{receptionStart}}`, reception.start)
  )
}