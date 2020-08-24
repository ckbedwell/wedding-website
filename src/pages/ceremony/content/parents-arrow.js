import { Svg } from 'components/svg'
import { Text } from 'components/text'

import styles from './parents-arrow.css'

export const ParentsArrow = () => {
  return (
    <div className={styles.infoArrow}>
      <div className={styles.arrowWrapper}>
        <Svg
          color={`black`}
          icon={`drawn-arrow`}
          size={[`25rem`]}
        />
      </div>
      <Text
        className={styles.arrowNote}
        family={`handwriting`}
        size={8}
      >
        {`Em's parents got married here 35 years ago!`}
      </Text>
    </div>
  )
}