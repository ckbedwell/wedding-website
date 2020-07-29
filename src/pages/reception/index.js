import React from 'react'

import { Container } from 'components/container'
import { Image } from 'components/image'
// import { Group } from 'components/group'

// import styles from './reception.css'
// import data from 'data/about.json'

export const Reception = () => {
  // const {
  //   items,
  // } = data

  return (
    <Container container="large">
      <Image
        ratio={[1729, 861]}
        src="em-chris-spain-narrow.jpg"
      />
    </Container>
  )
}
