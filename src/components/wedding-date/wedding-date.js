import { Text } from 'components/text'

export const WeddingDate = ({
  family = `secondary`,
  size = 8,
}) => {
  return (
    <Text
      family={family}
      size={size}
      textAlign={`center`}
    >
      {`September 3rd 2021`}
    </Text>
  )
}
