import React from 'react'

import { Box } from 'components/box'
import { Section } from 'components/section'
import { Polaroid } from 'components/polaroid'
import { Text } from 'components/text'

// import styles from './reception.css'
// import data from 'data/about.json'

export const Reception = () => {
  // const {
  //   items,
  // } = data

  return (
    <Section
      style={{
        backgroundColor: `rgb(255 246 234)`,
      }}
    >
      <Box
        flex
        gap={6}
      >
        <Text
          family={`secondary`}
          size={10}
          tag={`h1`}
        >
          {`Alcumlow Wedding Barn`}
        </Text>
        <Polaroid
          image={{
            ratio: [1400, 933],
            src: `aclumlow-wedding-barn.jpg`,
          }}
          rotate={-2}
          style={{
            width: `800px`,
          }}
          text={`Alcumlow Wedding Barn`}
        />
      </Box>
    </Section>
  )
}
