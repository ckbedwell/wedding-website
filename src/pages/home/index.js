import React from 'react'

import { Image } from 'components/image'
import { Header } from 'components/header'

import styles from './home.css'

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="em-chris-spain.jpg"
          type="cover"
        />
      </div>
      <Header />
    </div>
  )
}
