import React from 'react'

import { Polaroid } from 'components/polaroid'

export const ChurchPolaroid = () => {
  return (
    <Polaroid
      image={{
        ratio: [1920, 1440],
        src: `st-andrews-church.jpg`,
      }}
      rotate={-2}
      text={`St Andrews Church`}
    />
  )
}
