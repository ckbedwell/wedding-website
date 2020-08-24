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
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        ...style,
      }}
    >
      <div className={styles.polaroid}>
        <div className={styles.imageWrapper}>
          <Image
            ratio={ratio}
            src={src}
          />
        </div>
        {text &&
        <Text
          family={`handwriting`}
          size={7}
        >
          {text}
        </Text>
        }
      </div>
    </div>
  )
}
