import React from 'react'

import { Image } from 'components/image'
import { Text } from 'components/text'

import styles from './polaroid.css'

export const Polaroid = ({
  image,
  rotate,
  style = {},
  text,
}) => {
  const { src, ratio } = image

  return (
    <div
      className={styles.polaroid}
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          ratio={ratio}
          src={src}
        />
      </div>
      <Text
        family="handwriting"
        size={5}
      >
        {text}
      </Text>
    </div>
  )
}
