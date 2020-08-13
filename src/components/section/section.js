import React from 'react'

import { Container } from 'components/container'

import styles from './section.css'

export const Section = ({ children, style }) => {
  return (
    <section
      className={styles.banner}
      style={style}
    >
      <Container
        container="large"
        padded
      >
        {children}
      </Container>
    </section>
  )
}
