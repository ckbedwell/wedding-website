import React from 'react'

import { Text } from 'components/text'

export const ChurchText = () => {
  return (
    <div>
      <Text
        family={`secondary`}
        size={10}
        tag={`h1`}
      >
        {`St Andrews Church`}
      </Text>
      <Text>
        {`We'll be getting married at St Andrews Church.`}
      </Text>
    </div>
  )
}
