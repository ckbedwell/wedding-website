import { Svg } from 'components/svg'
import { Text } from 'components/text'
import { Desktop, TabletMobile } from 'components/responsive'

import styles from './parents-arrow.css'

export const ParentsArrow = () => {
  return (
    <div className={styles.infoArrow}>
      <Desktop>
        {renderArrow()}
        {renderNote()}
      </Desktop>
      <TabletMobile>
        {renderNote()}
        {renderArrow()}
      </TabletMobile>
    </div>
  )

  function renderArrow() {
    return (
      <div className={styles.arrowWrapper}>
        <Svg
          color={`black`}
          icon={`drawn-arrow`}
          size={[`25rem`]}
        />
      </div>
    )
  }

  function renderNote() {
    return (
      <Text
        className={styles.arrowNote}
        family={`handwriting`}
        size={8}
      >
        {`Em's parents got married here 35 years ago!`}
      </Text>
    )
  }
}