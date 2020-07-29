import React from 'react'
import classNames from 'classnames'

import styles from './image.css'

export const Image = ({ ratio, src, type }) => {
  const props = {
    className: classNames(styles.image, {
      [styles.cover]: type === `cover`,
    }),
  }

  const imgJSX = (
    <img
      {...props}
      src={src}
    />
  )
  
  if (type === 'cover') {
    return (
      <div
        {...props}
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
    )
  }

  if (ratio) {
    const [width, height] = ratio

    return (
      <div
        className={styles.ratio}
        style={{
          paddingTop: `${(height / width) * 100}%`,
        }}
      >
        {imgJSX}
      </div>
    )
  }

  return imgJSX
}